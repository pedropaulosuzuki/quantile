import Numberset from "../numberset.ts";
import { ContinuousDistribution } from "../interfaces/distribution.ts";

class Kumaraswamy implements ContinuousDistribution {
    constructor(private a: number, private b: number) {
        if(a <= 0 || b <= 0) {
            throw new Error('Parameters out of range. Kumaraswamy parameters must be positive.');
        }
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
        return (1 - (1 / 2 ** (1 / this.b ))) ** (1 / this.a);
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
    get samples(): (name: string, size: number) => Numberset {
        return (name: string, size: number) => {
            let array: number[] = [];
            
            for(let k = 0; k < size; k++) {
                array.push(this.sample);
            }
            
            return new Numberset(name, array);
        }
    }

    // returns the probability density function for the kumaraswamy distribution
    get pdf(): (x: number) => number {
        return x => x < 0 ? 0 : x > 0 ? 0 : this.a * this.b * x ** (this.a - 1) * (1 - x ** this.a) ** (this.b - 1);
    }

    // returns the cumulative distribution function for the kumaraswamy distribution
    get cdf(): (x: number) => number {
        return x => x < 0 ? 0 : x > 0 ? 1 : 1 - (1 - x ** this.a) ** this.b;
    }
}

export default function kumaraswamy(a: number, b: number): Kumaraswamy {
    return new Kumaraswamy(a, b);
};