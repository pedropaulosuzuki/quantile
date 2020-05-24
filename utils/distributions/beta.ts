import NumberSet from "../number_set.ts";

class Beta {
    constructor(private a: number, private b: number) {
        throw new Error('Not implemented.');
    }

    // Returns n samples from the Beta distribution
    sample(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
    }

    // returns the mean of the Beta distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the Beta distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the Beta distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }
}

export default function beta(a: number = 0.5, b: number = 10): Beta {
    return new Beta(a, b);
};