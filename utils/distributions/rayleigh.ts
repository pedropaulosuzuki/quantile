import { ContinuousDistribution } from '../interfaces/distribution.ts'
import NumberSet from '../number_set.ts';

class Rayleigh implements ContinuousDistribution {
    constructor(private scale: number = 1) {

    }

    // returns the mean of the rayleigh distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the rayleigh distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the rayleigh distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the rayleigh distribution
    get mode(): number {
        return this.scale;
    }

    // Returns one sample from the rayleigh distribution
    get sample(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // Returns n samples from the rayleigh distribution
    samples(size: number = 100): NumberSet {
        throw new Error('Not implemented.');
        return new NumberSet([]);
    }

    // returns the probability density function for the weibull distribution
    get pdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }

    // returns the cumulative distribution function for the weibull distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x;
    }
}

export default function rayleigh(scale: number = 1): Rayleigh {
    if(scale <= 0) {
        throw new Error('');
    }

    return new Rayleigh(scale);
}