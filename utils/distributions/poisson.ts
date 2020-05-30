import { DiscreteDistribution } from "../interfaces/distribution.ts";
import NumberSet from "../number_set.ts";

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
    samples(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
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
    return new Poisson(rate);
};