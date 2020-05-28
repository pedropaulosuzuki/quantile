import NumberSet from "../number_set.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class Exponential implements ContinuousDistribution {
    constructor(private lambda: number) {
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
    samples(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
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

export default function exponential(lambda: number = 2): Exponential {
    return new Exponential(lambda);
};