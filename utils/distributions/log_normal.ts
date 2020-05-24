import NumberSet from "../number_set.ts";

class LogNormal {
    constructor(private _mean: number, private stdev: number) {
        throw new Error('Not implemented.');
    }

    // Returns n samples from the log-normal distribution
    sample(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
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
}

export default function log_normal(mean: number, stdev: number): LogNormal {
    return new LogNormal(mean, stdev);
};