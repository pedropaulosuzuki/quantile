import NumberSet from '../number_set.ts';
import { DiscreteDistribution } from '../interfaces/distribution.ts';

class Binomial implements DiscreteDistribution {
    constructor(private p: number = 0.5, private n: number = 10) {

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
        throw new Error('Not implemented.');
        return 0; // to implement
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
    get samples(): (size: number) => NumberSet {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new NumberSet(array);
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

export default function binomial(p: number = 0.5, n: number = 10): Binomial {
    if(p < 0 || p > 1) throw new RangeError('Insert a probability between 0 and 1 for the binomial distribution.');
    if(n <= 0) throw new RangeError('Insert a positive number of trials for the binomial distribution.');
    return new Binomial(p, n);
};