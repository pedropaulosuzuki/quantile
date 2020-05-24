import NumberSet from "../number_set.ts";

class F {
    constructor(private d1: number, private d2: number) {
        throw new Error('Not implemented.');
    }

    // Returns n samples from the F distribution
    sample(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
    }

    // returns the mean of the F distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the F distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the F distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the F distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }
}

export default function f(d1: number = 2, d2: number = 2): F {
    return new F(d1, d2);
};