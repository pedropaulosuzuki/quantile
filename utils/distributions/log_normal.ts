import NumberSet from "../number_set.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class LogNormal implements ContinuousDistribution {
    constructor(private _mean: number, private stdev: number) {
        throw new Error('Not implemented.');
    }

    // returns the mean of the log-normal distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the log-normal distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the log-normal distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the log-normal distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns one sample from the log-normal distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the log-normal distribution
    samples(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
    }

    // returns the probability density function for the log-normal distribution
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

export default function log_normal(mean: number, stdev: number): LogNormal {
    return new LogNormal(mean, stdev);
};