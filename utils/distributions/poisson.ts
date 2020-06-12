import Numberset from "../numberset.ts";
import { DiscreteDistribution } from "../interfaces/distribution.ts";

class Poisson implements DiscreteDistribution {
    constructor(private rate: number) {
        throw new Error('Not implemented.');
    }

    // returns the mean of the poisson distribution
    get mean(): number {
        return this.rate;
    }

    // returns the variance of the poisson distribution
    get variance(): number {
        return this.rate;
    }

    // returns the median of the poisson distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the poisson distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns one sample from the poisson distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the poisson distribution
    get samples(): (name: string, size: number) => Numberset {
        return (name: string, size: number) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new Numberset(name, array);
        }
    }

    // returns the probability mass function for the poisson distribution
    get pmf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the poisson distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function poisson(rate: number): Poisson {
    if(rate <= 0) throw new RangeError('Insert a positive rate for the Poisson distribution.');
    return new Poisson(rate);
};