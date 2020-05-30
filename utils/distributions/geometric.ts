import NumberSet from "../number_set.ts";
import { DiscreteDistribution } from "../interfaces/distribution.ts";

class Geometric implements DiscreteDistribution {
    constructor(private p: number) {
        throw new Error('Not implemented.');
    }

    // returns the mean of the geometric distribution
    get mean(): number {
        return 1 / this.p;
    }

    // returns the variance of the geometric distribution
    get variance(): number {
        return (1 - this.p) / this.p ** 2;
    }

    // returns the median of the geometric distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the geometric distribution
    get mode(): number {
        return 1;
    }

    // Returns one sample from the geometric distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the geometric distribution
    get samples(): (size: number) => NumberSet {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new NumberSet(array);
        }
    }

    // returns the probability mass function for the geometric distribution
    get pmf(): (x: number) => number {
        return x => (x < 1) ? 0 : this.p * (1 - this.p) ** (x - 1);
    }

    // returns the cumulative distribution function for the geometric distribution
    get cdf(): (x: number) => number {
        return x => 1 - (1 - this.p) ** x;
    }
}

export default function geometric(success_probability: number): Geometric {
    if (success_probability < 0 || success_probability > 1) throw new Error('Insert a success probability between 0 and 1 for the geometric distribution.');
    return new Geometric(success_probability);
};