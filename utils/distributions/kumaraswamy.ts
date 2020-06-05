import NumberSet from "../numberset.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class Kumaraswamy implements ContinuousDistribution {
    constructor(private a: number, private b: number) {
        throw new Error('Not implemented.');
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

    // Returns one sample from the kumaraswamy distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the kumaraswamy distribution
    get samples(): (size: number) => NumberSet {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new NumberSet(array);
        }
    }

    // returns the probability density function for the kumaraswamy distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the kumaraswamy distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function kumaraswamy(a: number, b: number): Kumaraswamy {
    return new Kumaraswamy(a, b);
};