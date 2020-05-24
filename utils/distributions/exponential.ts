import NumberSet from "../number_set.ts";

class Exponential {
    constructor(private lambda: number) {
        throw new Error('Not implemented.');
    }

    // Returns n samples from the exponential distribution
    sample(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
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
}

export default function exponential(lambda: number = 2): Exponential {
    return new Exponential(lambda);
};