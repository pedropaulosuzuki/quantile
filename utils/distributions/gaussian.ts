import NumberSet from '../number_set.ts';

class Gaussian {
    constructor(private _mean: number = 0, private stdev: number = 1) {
    }

    // Returns n samples from the gaussian distribution
    sample(size: number = 100): NumberSet {
        let array: number[] = [];

        for(let i = 0; i < size; i++) {
            const result = this._mean + this.stdev * (-2 * Math.log(Math.random())) ** 0.5 * Math.cos(2 * Math.PI * Math.random());

            array.push(result);
        }

        return new NumberSet(array);
    }

    // returns the mean of the gaussian distribution
    get mean(): number {
        return this._mean;
    }

    // returns the variance of the gaussian distribution
    get variance(): number {
        return this.stdev ** 2;
    }

    // returns the mean of the gaussian distribution
    get median(): number {
        return this._mean;
    }

    // returns the mode of the gaussian distribution
    get mode(): number {
        return this._mean;
    }

    // returns the probability density function for the gaussian distribution
    get pdf(): (x: number) => number {
        return x => 1 / (this.stdev * (2 * Math.PI) ** 0.5) * Math.exp(-1 / 2 * (x - this._mean) ** 2 / this.variance); // to implement
    }

    // returns the cumulative distribution function for the gaussian distribution
    get cdf(): (x: number) => number {
        throw new Error('Not implemented.');
        return x => x; // to implement
    }
}

export default function gaussian(mean: number = 0.5, variance: number = 10) {
    if(variance <= 0) {
        throw new Error('Insert a positive variance for the gaussian distribution.');
    }
    return new Gaussian(mean, variance);
};