import Numberset from "../numberset.ts";
import { DiscreteDistribution } from "../interfaces/distribution.ts";

class NegativeBinomial implements DiscreteDistribution {
    constructor(private successes: number, private p: number) {
        throw new Error('Not implemented.');
    }

    // returns the mean of the negative binomial distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the negative binomial distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the negative binomial distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the negative binomial distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns one sample from the negative binomial distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the negative binomial distribution
    get samples(): (size: number) => Numberset {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new Numberset(array);
        }
    }

    // returns the probability mass function for the negative binomial distribution
    get pmf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the negative binomial distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function negative_binomial(successes: number, success_probability: number): NegativeBinomial {
    if (successes <= 0) throw new RangeError('Insert a positive number of successes for the negative binomial distribution.');
    if (success_probability <= 0 || success_probability > 1) throw new RangeError('Insert a success probability between 0 and 1 for the negative binomial distribution.');
    return new NegativeBinomial(successes, success_probability);
};