import Numberset from "../numberset.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class ChiSquared implements ContinuousDistribution {
    constructor(private k: number) {
        throw new Error('Not implemented.');
    }

    // returns the mean of the chi-squared distribution
    get mean(): number {
        return this.k;
    }

    // returns the variance of the chi-squared distribution
    get variance(): number {
        return 2 * this.k;
    }

    // returns the median of the chi-squared distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the chi-squared distribution
    get mode(): number {
        return Math.max(this.k - 2, 0);
    }

    // Returns one sample from the chi-squared distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the chi-squared distribution
    get samples(): (name: string, size: number) => Numberset {
        return (name: string, size: number) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new Numberset(name, array);
        }
    }

    // returns the probability density function for the chi-squared distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the chi-squared distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function chi_squared(k: number = 2): ChiSquared {
    return new ChiSquared(k);
};