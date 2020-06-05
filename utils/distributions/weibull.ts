import NumberSet from '../numberset.ts';
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class Weibull implements ContinuousDistribution {
    constructor(private scale: number, private shape: number, private location: number) {
        throw new Error('Not implemented.');
    }

    // returns the mean of the weibull distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the weibull distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the weibull distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the weibull distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns one sample from the weibull distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the weibull distribution
    get samples(): (size: number) => NumberSet {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new NumberSet(array);
        }
    }

    // returns the probability density function for the weibull distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the weibull distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function weibull(scale: number, shape: number = 1, location: number = 0): Weibull {
    return new Weibull(scale, shape, location);
}