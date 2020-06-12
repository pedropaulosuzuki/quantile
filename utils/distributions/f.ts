import Numberset from "../numberset.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class F implements ContinuousDistribution {
    constructor(private d1: number, private d2: number) {
        throw new Error('Not implemented.');
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

    // Returns one sample from the F distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the F distribution
    get samples(): (name: string, size: number) => Numberset {
        return (name: string, size: number) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new Numberset(name, array);
        }
    }

    // returns the probability density function for the F distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the F distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function f(d1: number = 2, d2: number = 2): F {
    return new F(d1, d2);
};