import Numberset from "../numberset.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class LogLogistic implements ContinuousDistribution {
    constructor() {
        throw new Error('Not implemented.');
    }

    // returns the mean of the log-logistic distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the log-logistic distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the log-logistic distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the log-logistic distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns one sample from the log-logistic distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the log-logistic distribution
    get samples(): (size: number) => Numberset {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new Numberset(array);
        }
    }

    // returns the probability density function for the log-logistic distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the log-logistic distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function log_logistic(mean: number, standard_deviation: number): LogLogistic {
    return new LogLogistic();
}