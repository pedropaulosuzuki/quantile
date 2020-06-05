import NumberSet from '../numberset.ts';
import { ContinuousDistribution } from '../interfaces/distribution.ts';

class Gaussian implements ContinuousDistribution {
    constructor(private location: number = 0, private scale: number = 1) {
    }

    // returns the mean of the gaussian distribution
    get mean(): number {
        return this.location;
    }

    // returns the variance of the gaussian distribution
    get variance(): number {
        return this.scale ** 2;
    }

    // returns the mean of the gaussian distribution
    get median(): number {
        return this.location;
    }

    // returns the mode of the gaussian distribution
    get mode(): number {
        return this.location;
    }

    // Returns one sample from the gaussian distribution
    get sample(): number {
        return this.location + this.scale * (-2 * Math.log(Math.random())) ** 0.5 * Math.cos(2 * Math.PI * Math.random());
    }

    // Returns n samples from the gaussian distribution
    get samples(): (size: number) => NumberSet {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new NumberSet(array);
        }
    }

    // returns the probability density function for the gaussian distribution
    get pdf(): (x: number) => number {
        return x => 1 / (this.scale * (2 * Math.PI) ** 0.5) * Math.exp(-1 / 2 * (x - this.location) ** 2 / this.variance); // to implement
    }

    // returns the cumulative distribution function for the gaussian distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x; // to implement
    }
}

// function declaration uses variance, class declaration uses stdev
export default function gaussian(mean: number = 0, standard_deviation: number = 1): Gaussian {
    if(standard_deviation <= 0) throw new RangeError('Insert a positive standard deviation for the gaussian distribution.');
    return new Gaussian(mean, standard_deviation);
};