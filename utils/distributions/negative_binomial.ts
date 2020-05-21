export default function negative_binomial(p: number, n: number): number {

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
}