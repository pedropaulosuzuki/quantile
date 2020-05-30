export default class NumberSet {
    private data: number[] = [];

    private throwIfEmpty = (operation: string) => {
        if(this.size === 0) {
            throw new Error(`Cannot get ${operation} from an empty array.`);
        }
    };

    constructor(array: number[]) {
        // sorts the data before insertion, in order to falicitate new operations later. Implementation details may change.
        this.data = array.sort((x, y) => x - y);
    }

    push(array: number[]): NumberSet {
        // sorts the updated data, in order to falicitate new operations later. Implementation details may change.
        this.data = [...this.data, ...array].sort((x, y) => x - y);

        //returns the instance for chainability purposes
        return this;
    }

    apply(func: (x: number) => number): NumberSet {
        // applies a function for each element in the array.
        // mutates the existing numberset!!
        this.data = this.data.map(x => func(x));

        // returns the instance for chainability purposes.
        return this;
    }

    map(func: (x: number) => number): NumberSet {
        // does not mutate the current numberset
        return new NumberSet(this.data.map(func));
    }

    sum(func: (x: number) => number = x => x): number {
        // sums all the elements in the numberset
        return this.data.reduce((x, y) => x + func(y), 0);
    }

    quantile(q: number): number {
        this.throwIfEmpty('quantile');

        if(q < 0 || q > 1) {
            throw new Error('Quantile is out of bounds. Enter a number between 0 and 1');
        }
        
        if(q === 0 || this.size === 1) {
            return this.data[0];
        }

        if(q === 1) {
            return this.data[this.size - 1];
        }

        const position = Math.floor(q * (this.size - 1));

        const factor = +(q * (this.size - 1) - position).toFixed(10);

        return +(factor * this.data[position + 1] + (1 - factor) * this.data[position]).toFixed(10);
    }

    range(start: number, end: number): NumberSet {
        // filters a range of numbers in the numberset.
        return new NumberSet(this.data.filter(x => (x >= start) && (x <= end)));
    }

    get size(): number {
        return this.data.length;
    }

    // Returns a sorted array representation of the dataset.
    get array(): number[] {
        return this.data;
    }

    // Returns a map containing the values of the dataset with their occurance count
    // Example:
    // let datamap = new NumberSet([1, 1, 2, 1, 3]).datamap;
    // console.log(datamap) => Map { 1 => 3, 2 => 1, 3 => 1 }
    get datamap(): Map<number, number> {
        const map = new Map();

        for(const number of this.data) {
            if(map.has(number)) {
                map.set(number, map.get(number) + 1);
            } else {
                map.set(number, 1);
            }
        }

        return map;
    }

    get mean(): number {
        this.throwIfEmpty('mean');
        return this.sum() / this.size;
    }

    get variance(): number {
        this.throwIfEmpty('variance');

        return this.sum(x => x ** 2) / this.size - this.mean ** 2;
    }

    get median(): number {
        this.throwIfEmpty('median');
        return this.quantile(0.5);
    }

    get mode(): Map<number, number> {
        this.throwIfEmpty('mode');
        let map = this.datamap;

        const array = [...map.entries()];
        const max = Math.max(...array.map(item => item[1]));
        const filtered: Map<number, number> = new Map(array.filter(item => item[1] === max));

        return filtered;
    }

    get sample(): number {
        let index = Math.floor(this.size * Math.random());
        return this.data[index];
    }

    samples(amount: number): NumberSet {
        let array: number[] = [];
        for(let i = 0; i < amount; i++) {
            array.push(this.sample);
        }
        array.push();
        return new NumberSet(array);
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