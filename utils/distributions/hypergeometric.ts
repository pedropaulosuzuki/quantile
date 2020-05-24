import NumberSet from "../number_set.ts";

class Hypergeometric {
    constructor(private N: number, private K: number, private n: number) {
        throw new Error('Not implemented.');
    }

    // Returns n samples from the hypergeometric distribution
    sample(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
    }

    // returns the mean of the hypergeometric distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the hypergeometric distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the hypergeometric distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the hypergeometric distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }
}

export default function hypergeometric(N: number, K: number, n: number): Hypergeometric {
    return new Hypergeometric(N, K, n);
};