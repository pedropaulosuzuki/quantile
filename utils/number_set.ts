export default class NumberSet {
    private data: number[] = [];

    private throwIfEmpty = (operation: string) => {
        if(this.size === 0) {
            throw new Error(`Cannot get ${operation} from an empty array.`);
        }
    };

    constructor(array: number[]) {
        this.data = array.sort((x, y) => x - y);
    }

    push(array: number[]): NumberSet {
        this.data = [...this.data, ...array].sort((x, y) => x - y);
        return this;
    }

    apply(func: (x: number) => number): NumberSet {
        this.data = this.data.map(x => func(x));
        return this;
    }

    map(func: (x: number) => number): NumberSet {
        return new NumberSet(this.data.map(func));
    }

    sum(func: (x: number) => number = x => x): number {
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
        console.log('position', position, 'size', this.size);

        const factor = +(q * (this.size - 1) - position).toFixed(10);

        return +(factor * this.data[position + 1] + (1 - factor) * this.data[position]).toFixed(10);
    }

    range(start: number, end: number): NumberSet {
        return new NumberSet(this.data.filter(x => (x >= start) && (x <= end)));
    }

    sample(n: number): NumberSet {
        let array: number[] = [];
        for(let i = 0; i < n; i++) {
            let index = Math.floor(this.size * Math.random());
            array.push(this.data[index]);
        }
        array.push();
        return new NumberSet(array);
    }

    get size(): number {
        return this.data.length;
    }

    get array(): number[] {
        return this.data;
    }

    get dataSet(): Map<number, number> {
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
        let map = this.dataSet;

        const array = [...map.entries()];
        const max = Math.max(...array.map(item => item[1]));
        const filtered: Map<number, number> = new Map(array.filter(item => item[1] === max));

        return filtered;
    }
}