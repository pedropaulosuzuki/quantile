import NumberSet from '../number_set.ts';
import { ContinuousDistribution } from '../interfaces/distribution.ts';

class Uniform implements ContinuousDistribution {
    constructor(private start: number = 0, private end: number = 1) {

    }

    // returns the mean of the uniform distribution
    get mean(): number {
        return (this.end + this.start) / 2;
    }

    // returns the variance of the uniform distribution
    get variance(): number {
        return (this.end - this.start) ** 2 / 12;
    }

    // returns the median of the uniform distribution, which is the same as the mean.
    get median(): number {
        return this.mean;
    }

    // The mode for the uniform distribution is the whole interval. Therefore, returns the mean.
    get mode(): number {
        return this.mean;
    }
    
    // Returns n samples from the uniform distribution
    sample(size: number = 100): NumberSet {
        let array: number[] = [];
        
        for(let k = 0; k < size; k++) {
            array.push(this.start + this.end * Math.random());
        }
        
        return new NumberSet(array);
    }

    // returns the probability density function for the uniform distribution
    get pdf(): (x: number) => number {
        const value = 1 / (this.end - this.start);
        return x => x < this.start || x > this.end ? 0 : value;
    }

    // returns the cumulative distribution function for the uniform distribution
    get cdf(): (x: number) => number {
        return x => x < this.start ? 0 : x > this.end ? 1 : (x - this.start) / (this.end - this.start);
    }
}

export default function uniform(start: number = 0, end: number = 1): Uniform {
    return new Uniform(start, end);
};
