import Numberset from '../numberset.ts';
import { DiscreteDistribution } from '../interfaces/distribution.ts';

class Binomial implements DiscreteDistribution {
    constructor(private p: number = 0.5, private n: number = 10) {
        if(n <= 0 || !Number.isInteger(n)) {
            throw new Error('The number of trials in a binomial distribution must be a natural number.');
        }

        if(p < 0 || p > 1) {
            throw new RangeError('Insert a probability between 0 and 1 for the binomial distribution.');
        }
    }

    // returns the mean of the binomial distribution
    get mean(): number {
        return this.n * this.p;
    }

    // returns the variance of the binomial distribution
    get variance(): number {
        return this.n * this.p * (1 - this.p);
    }

    // returns the mean of the binomial distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0; // to implement
    }

    // returns the mode of the binomial distribution
    get mode(): number {
        return this.p === 1 ? this.n : this.p === 0 ? 0 : Math.floor((this.n + 1) * this.p);
    }

    // Returns one sample from the binomial distribution
    get sample(): number {
        let count = 0;

        for(let k = 0; k < this.n; k++) {
            // One bernoulli trial
            count += +(Math.random() < this.p);
        }

        return count;
    }

    // Returns n samples from the binomial distribution
    get samples(): (name: string, size: number) => Numberset {
        return (name: string, size: number) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new Numberset(name, array);
        }
    }

    // returns the probability mass function for the binomial distribution
    get pmf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x; // to implement
    }

    // returns the cumulative distribution function for the binomial distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x; // to implement
    }
}

export default function binomial(p: number = 0.5, n: number = 10): Binomial {;
    return new Binomial(p, n);
};