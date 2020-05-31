import NumberSet from "../number_set.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class Logistic implements ContinuousDistribution {
    constructor(private location: number, private scale: number) {
    }

    // returns the mean of the logistic distribution
    get mean(): number {
        return this.location;
    }

    // returns the variance of the logistic distribution
    get variance(): number {
        return (this.scale * Math.PI) ** 2 / 3;
    }

    // returns the median of the logistic distribution
    get median(): number {
        return this.location;
    }

    // returns the mode of the logistic distribution
    get mode(): number {
        return this.location;
    }

    // Returns one sample from the logistic distribution
    get sample(): number {
        let random = Math.random();
        return this.location + this.scale * Math.log(random / (1 - random));
    }
    
    // Returns n samples from the logistic distribution
    get samples(): (size: number) => NumberSet {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new NumberSet(array);
        }
    }

    // returns the probability density function for the logistic distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the log-normal distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function logistic(mean: number, standard_deviation: number): Logistic {
    return new Logistic(mean, standard_deviation * 3 ** 0.5 / Math.PI);
};