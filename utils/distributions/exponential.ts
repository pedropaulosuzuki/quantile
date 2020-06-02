import NumberSet from "../number_set.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class Exponential implements ContinuousDistribution {
    constructor(private rate: number) {
        throw new Error('Not implemented.');
    }

    // returns the mean of the exponential distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the exponential distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the exponential distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the exponential distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns one sample from the exponential distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the exponential distribution
    get samples(): (size: number) => NumberSet {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new NumberSet(array);
        }
    }

    // returns the probability density function for the exponential distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the exponential distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function exponential(rate: number = 2): Exponential {
    if(rate <= 0) throw new RangeError('Insert a positive rate for the exponential distribution.');
    return new Exponential(rate);
};