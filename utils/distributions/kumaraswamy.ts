import NumberSet from "../number_set.ts";

class Kumaraswamy {
    constructor(private a: number, private b: number) {
        throw new Error('Not implemented.');
    }

    // Returns n samples from the kumaraswamy distribution
    sample(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
    }

    // returns the mean of the kumaraswamy distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the kumaraswamy distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the kumaraswamy distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the kumaraswamy distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }    
}

export default function kumaraswamy(a: number, b: number): Kumaraswamy {
    return new Kumaraswamy(a, b);
};