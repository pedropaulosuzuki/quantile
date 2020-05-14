import NumberSet from '../number_set.ts';

class Bernoulli {
    constructor(private p = 0.5) {

    }

    // Returns n samples from the bernoulli distribution
    sample(size: number = 100): NumberSet {
        let array: number[] = [];
        
        for(let k = 0; k < size; k++) {
            array.push(+(Math.random() < this.p));
        }
        
        return new NumberSet(array);
    }

    // returns the mean of the bernoulli distribution
    get mean(): number {
        return this.p;
    }

    // returns the variance of the bernoulli distribution
    get variance(): number {
        return this.p * (1 - this.p);
    }

    // returns the mean of the bernoulli distribution
    get median(): number {
        return this.p < 0.5 ? 0 : this.p > 0.5 ? 1 : 0.5;
    }

    // returns the mode of the bernoulli distribution
    get mode(): number {
        return 0; // to implement
    }

    // returns the probability density function for the bernoulli distribution
    get pmf(): (x: number) => number {
        return x => x === 1 ? this.p : x === 0 ? 1 - this.p : 0;
    }

    // returns the cumulative distribution function for the bernoulli distribution
    get cdf(): (x: number) => number {
        return x => x < 0 ? 0 : x >= 1 ? 1 : 1 - this.p;
    }
}

export default function bernoulli(p: number = 0.5) {
    if(p < 0 || p > 1) {
        throw new Error('Insert a probability between 0 and 1 for the bernoulli distribution.');
    }
    return new Bernoulli(p);
};