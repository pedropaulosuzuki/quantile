import numberset from './interfaces/numberset.ts';

export default class NumberSet implements numberset {
    private data: number[] = [];

    constructor(array: number[]) {
        // sorts the data before insertion, in order to falicitate new operations later. Implementation details may change.
        this.data = array.sort((x, y) => x - y);
    }

    // Right now pushes an array into a NumberSet
    // Should change to push(NumberSet), push_array and push_map
    get push(): (array: number[]) => NumberSet {
        return (array: number[]) => {
            // sorts the updated data, in order to falicitate new operations later.
            this.data = [...this.data, ...array].sort((x, y) => x - y);

            //returns the instance for chainability purposes.
            return this;
        }
    }

    get apply(): (fn: (element: number) => number) => NumberSet {
        return (fn: (element: number) => number) => {
            // applies a function for each element in the array.
            // mutates the existing numberset!!
            this.data = this.data.map(x => fn(x));

            // returns the instance for chainability purposes.
            return this;
        }
    }

    get map(): (fn: (element: number) => number) => NumberSet {
        return (fn: (element: number) => number) => {
            // does not mutate the current numberset.
            return new NumberSet(this.data.map(fn));
        }
        
    }

    // sums all the elements in the numberset after applying a function to each one.
    get sum_fn(): (fn: (element: number) => number) => number {
        return (fn: (element: number) => number = element => element) => {
            return this.data.reduce((x: number, y: number) => x + fn(y), 0);
        }
    }

    get quantile(): (q: number) => number {
        return (q: number) => {
            // cannot calculate 'q' quantile of empty numbernet.
            if(this.size === 0) {
                throw new Error(`Cannot get quantile from an empty numberset.`);
            }

            // parameter 'q' must be located between 0 and 1. Otherwise throws an exception.
            if(q < 0 || q > 1) {
                throw new Error('Quantile is out of bounds. Enter a number between 0 and 1');
            }

            // returns the first element of the numberset
            if(q === 0 || this.size === 1) {
                return this.data[0];
            }

            // returns the last element of the numberset
            if(q === 1) {
                return this.data[this.size - 1];
            }

            const position = Math.floor(q * (this.size - 1));

            const factor = +(q * (this.size - 1) - position).toFixed(10);

            return +(factor * this.data[position + 1] + (1 - factor) * this.data[position]).toFixed(10);
        }
    }

    // filters a range of numbers in the numberset.
    get range(): (start: number, end: number) => NumberSet {
        return (start: number, end: number) => {
            return new NumberSet(this.data.filter(x => (x >= start) && (x <= end)));
        }
    }

    // returns a sorted array representation of the numberset.
    get array(): number[] {
        // in the current implementation, this.data is already sorted.
        return this.data;
    }

    // returns a map containing the values of the dataset with their occurance count
    // example:
    // let datamap = new NumberSet([1, 1, 2, 1, 3]).datamap;
    // console.log(datamap) => Map { 1 => 3, 2 => 1, 3 => 1 }
    get datamap(): Map<number, number> {
        const map = new Map();

        // counts how many times each number appears in the numberset.
        for(const number of this.data) {
            if(map.has(number)) {
                map.set(number, map.get(number) + 1);
            } else {
                map.set(number, 1);
            }
        }

        return map;
    }

     // returns the size of the numberset.
     get size(): number {
        return this.data.length;
    }

    // sums all the elements of the numberset.
    get sum(): number {
        // cannot get sum of empty numberset.
        if(this.size === 0) throw new Error(`Cannot get sum from an empty numberset.`);

        return this.data.reduce((x: number, y: number) => x + y, 0);
    }

    get mean(): number {
        // cannot get mean of empty numberset.
        if(this.size === 0) throw new Error(`Cannot get mean from an empty numberset.`);

        return this.sum / this.size;
    }

    get variance(): number {
        // cannot get variance of empty numberset.
        if(this.size === 0) throw new Error(`Cannot get variance from an empty numberset.`);

        return this.sum_fn(x => x ** 2) / this.size - this.mean ** 2;
    }

    get median(): number {
        // cannot get median of empty numberset.
        if(this.size === 0) throw new Error(`Cannot get variance from an empty numberset.`);

        return this.quantile(0.5);
    }

    get mode(): Map<number, number> {
        // cannot get mode of empty numberset.
        if(this.size === 0) throw new Error(`Cannot get mode from an empty numberset.`);
        let map = this.datamap;

        const array = [...map.entries()];
        const max = Math.max(...array.map(item => item[1]));
        const filtered: Map<number, number> = new Map(array.filter(item => item[1] === max));

        return filtered;
    }

    // returns an unbiased single sample from the numberset, but does not remove it from the original set.
    get sample(): number {
        if(this.size === 0) throw new Error(`Cannot get sample from an empty numberset.`);

        let index = Math.floor(this.size * Math.random());
        return this.data[index];
    }

    get samples(): (size: number) => NumberSet {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new NumberSet(array);
        }
    }

    *[Symbol.iterator](): Generator<number, void, unknown> {
        // still deciding on which of the methods below to use.
        // for(const value of this.data) yield value; // More elegant, but half performance.
        let index = 0;
        while(index < this.size) {
            yield this.data[index++]; // Less elegant, but double performance.
        }
    }
    
    toString(): string {
        return 'Numberset: <' + this.array.toString().split(',').join(', ') + '>';
    }
}