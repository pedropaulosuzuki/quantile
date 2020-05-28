import NumberSet from '../number_set.ts';
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class Weibull implements ContinuousDistribution {
    constructor(private scale: number, private shape: number) {
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
    samples(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
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

export default function weibull(scale: number, shape: number): Weibull {
    return new Weibull(scale, shape);
}