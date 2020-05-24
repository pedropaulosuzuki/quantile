import NumberSet from "../number_set.ts";

class StudentT {
    constructor(private df: number) {
        throw new Error('Not implemented.');
    }

    // Returns n samples from the student t distribution
    sample(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
    }

    // returns the mean of the student t distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the student t distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the student t distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the student t distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }
}

export default function t(df: number = 10): StudentT {
    return new StudentT(df);
};