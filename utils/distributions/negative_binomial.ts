import NumberSet from "../number_set.ts";

class NegativeBinomial {
    constructor() {
        throw new Error('Not implemented.');
    }

    // Returns n samples from the negative binomial distribution
    sample(size: number = 100): NumberSet {
        throw new Error('Not implemented.');

        /* 
        if(n <= 0) {
            throw new Error('Insert a positive number of successes for the negative binomial distribution.');
        }

        if(p <= 0 || p > 1) {
            throw new Error('Insert a probability between 0 and 1 for the negative binomial distribution.');
        }

        let successes = 0, failures = 0;

        while(successes < n) {
            Math.random() < p ? successes++ : failures++;
        }

        return failures;
        */

        return new NumberSet([]);
    }

    // returns the mean of the negative binomial distribution
    get mean(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the variance of the negative binomial distribution
    get variance(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the median of the negative binomial distribution
    get median(): number {
        throw new Error('Not implemented.');
        return 0;
    }

    // returns the mode of the negative binomial distribution
    get mode(): number {
        throw new Error('Not implemented.');
        return 0;
    }
}

export default function negative_binomial(): NegativeBinomial {
    return new NegativeBinomial();
};