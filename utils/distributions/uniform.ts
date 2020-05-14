import NumberSet from '../number_set.ts';

class Uniform {
    constructor(private start: number = 0, private end: number = 1) {

    }

    // Returns n samples from the uniform distribution
    sample(size: number = 100): NumberSet {
        let array: number[] = [];
        
        for(let k = 0; k < size; k++) {
            array.push(this.start + this.end * Math.random());
        }
        
        return new NumberSet(array);
    }

    // returns the mean of the uniform distribution
    get mean(): number {
        return (this.end + this.start) / 2;
    }

    // returns the variance of the uniform distribution
    get variance(): number {
        return (this.end - this.start) ** 2 / 12;
    }

    // returns the mean of the uniform distribution
    get median(): number {
        return (this.end + this.start) / 2;
    }

    // The mode for the uniform distribution is the whole interval.
    /* get mode(): number {
        return;
    } */

    // returns the probability density function for the uniform distribution
    get pdf(): (x: number) => number {
        const value = 1 / (this.end - this.start);
        return x => x < this.start || x > this.end ? 0 : value;
    }

    // returns the cumulative distribution function for the uniform distribution
    get cdf(): (x: number) => number {
        return x => x < this.start ? 0 : x > this.end ? 1 : (x - this.start) / (this.end - this.start);
    }
}

export default function uniform(start: number = 0, end: number = 1) {
    return new Uniform(start, end);
};
