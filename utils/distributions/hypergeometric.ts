import NumberSet from "../numberset.ts";
import { DiscreteDistribution } from "../interfaces/distribution.ts";

class Hypergeometric implements DiscreteDistribution {
    constructor(private N: number, private K: number, private n: number) {
        throw new Error('Not implemented.');
    }

    // returns the mean of the hypergeometric distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the hypergeometric distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the hypergeometric distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the hypergeometric distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns one sample from the hypergeometric distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the hypergeometric distribution
    get samples(): (size: number) => NumberSet {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new NumberSet(array);
        }
    }

    // returns the probability mass function for the hypergeometric distribution
    get pmf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the hypergeometric distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

// remember to change names for those parameters
export default function hypergeometric(N: number, K: number, n: number): Hypergeometric {
    return new Hypergeometric(N, K, n);
};