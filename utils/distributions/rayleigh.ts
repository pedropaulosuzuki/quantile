import Numberset from '../numberset.ts';
import { ContinuousDistribution } from '../interfaces/distribution.ts'

class Rayleigh implements ContinuousDistribution {
    constructor(private scale: number = 1) {

    }

    // returns the mean of the rayleigh distribution
    get mean(): number {
        return this.scale * (Math.PI / 2) ** 0.5;
    }

    // returns the variance of the rayleigh distribution
    get variance(): number {
        return this.scale ** 2 * 1 / 2 * (4 - Math.PI);
    }

    // returns the median of the rayleigh distribution
    get median(): number {
        return this.scale * (2 * Math.log(2)) ** 0.5;
    }

    // returns the mode of the rayleigh distribution
    get mode(): number {
        return this.scale;
    }

    // Returns one sample from the rayleigh distribution
    get sample(): number {
        return this.scale * (-2 * Math.log(Math.random())) ** 0.5;
    }

    // Returns n samples from the rayleigh distribution
    get samples(): (size: number) => Numberset {
        return (size: number = 100) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new Numberset(array);
        }
    }

    // returns the probability density function for the rayleigh distribution
    get pdf(): (x: number) => number {
        return x => (1 / this.scale) ** 2 * x * Math.exp(-1 / 2 * (x / this.scale) ** 2);
    }

    // returns the cumulative distribution function for the rayleigh distribution
    get cdf(): (x: number) => number {
        return x => 1 - Math.exp(-1 / 2 * (x / this.scale) ** 2);
    }
}

export default function rayleigh(scale: number = 1): Rayleigh {
    if (scale <= 0) throw new RangeError('Please insert a positive scale parameter for the rayleigh distribution.');

    return new Rayleigh(scale);
}