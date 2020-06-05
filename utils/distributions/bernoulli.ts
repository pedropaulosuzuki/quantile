import NumberSet from '../numberset.ts';
import { DiscreteDistribution } from '../interfaces/distribution.ts';

class Bernoulli implements DiscreteDistribution {
    constructor(private p = 0.5) {

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
        // For p < 0.5, the median is 0, for p > 0.5, the median is 1. For p = 0.5, the median is 0.5.
        return this.p < 0.5 ? 0 : this.p > 0.5 ? 1 : 0.5;
    }

    // returns the mode of the bernoulli distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0; // to implement
    }

    // Returns one sample from the bernoulli distribution
    get sample(): number {
        // generates a random number, then if it is less than p, return +true (1), else returns +false (0)
        return +(Math.random() < this.p);
    }

    // Returns n samples from the bernoulli distribution
    get samples(): (size: number) => NumberSet {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new NumberSet(array);
        }
    }

    // returns the probability mass function for the bernoulli distribution
    get pmf(): (x: number) => number {
        return x => x === 1 ? this.p : x === 0 ? 1 - this.p : 0;
    }

    // returns the cumulative distribution function for the bernoulli distribution
    get cdf(): (x: number) => number {
        return x => x < 0 ? 0 : x >= 1 ? 1 : 1 - this.p;
    }
}

export default function bernoulli(p: number = 0.5): Bernoulli {
    if(p < 0 || p > 1) throw new RangeError('Insert a probability between 0 and 1 for the bernoulli distribution.');
    return new Bernoulli(p);
};