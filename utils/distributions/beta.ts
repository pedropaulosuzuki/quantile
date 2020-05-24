import NumberSet from "../number_set.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class Beta implements ContinuousDistribution {
    constructor(private a: number, private b: number) {
        throw new Error('Not implemented.');
    }
    
    // returns the mean of the beta distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }
    
    // returns the variance of the beta distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the beta distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }
    
    // returns the mode of the beta distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the beta distribution
    sample(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
    }

    // returns the probability density function for the beta distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the beta distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function beta(a: number = 0.5, b: number = 0.5): Beta {
    return new Beta(a, b);
};