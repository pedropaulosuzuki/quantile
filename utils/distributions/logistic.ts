import NumberSet from "../number_set.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class Logistic implements ContinuousDistribution {
    constructor(private _mean: number, private scale: number) {
        throw new Error('Not implemented.');
    }

    // returns the mean of the logistic distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the logistic distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the logistic distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the logistic distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }
    
    // Returns n samples from the logistic distribution
    sample(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
    }

    // returns the probability density function for the logistic distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the log-normal distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function logistic(mean: number, scale: number): Logistic {
    return new Logistic(mean, scale);
};