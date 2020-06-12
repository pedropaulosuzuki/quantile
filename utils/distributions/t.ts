import Numberset from "../numberset.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class StudentT implements ContinuousDistribution {
    constructor(private df: number, private location: number, private scale: number) {
        throw new Error('Not implemented.');
    }

    // returns the mean of the student t distribution
    get mean(): number {
        return this.location;
    }

    // returns the variance of the student t distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the student t distribution
    get median(): number {
        return this.location;
    }

    // returns the mode of the student t distribution
    get mode(): number {
        return this.location;
    }

    // Returns one sample from the student t distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the student t distribution
    get samples(): (size: number) => Numberset {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new Numberset(array);
        }
    }

    // returns the probability density function for the student t distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the student t distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function t(df: number = 10, location: number = 0, scale: number = 1): StudentT {
    return new StudentT(df, location, scale);
};