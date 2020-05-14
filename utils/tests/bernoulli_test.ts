import quantile from '../../quantile.ts';

const bernoulli = quantile.distributions.bernoulli;

/// Test
export default function test_bernoulli() {
    // Tests for the mean and variance of the bernoulli distribution.
    console.assert(bernoulli(0.4).mean === 0.4, 'Error on calculating the mean of bernoulli distribution.');
    console.assert(bernoulli(0.6).variance === 0.24, 'Error on calculating the variance of bernoulli distribution.');

    // Tests for the median of the bernoulli distribution.
    console.assert(bernoulli(0.3).median === 0, 'Error on calculating the median bernoulli distribution for p < 0.5.');
    console.assert(bernoulli(0.5).median === 0.5, 'Error on calculating the median bernoulli distribution for p = 0.5.');
    console.assert(bernoulli(0.8).median === 1, 'Error on calculating the median bernoulli distribution for p > 0.5.');

    // Tests for the probability density function of the bernoulli distribution.
    console.assert(bernoulli(0.2).pmf(-1) === 0, 'Error on calculating pmf of bernoulli distribution below 0.');
    console.assert(bernoulli(0.3).pmf(0) === 0.7, 'Error on calculating pmf of bernoulli distribution at 0.');
    console.assert(bernoulli(0.4).pmf(0.5) === 0, 'Error on calculating pmf of bernoulli distribution between 0 and 1.');
    console.assert(bernoulli(0.6).pmf(1) === 0.6, 'Error on calculating pmf of bernoulli distribution at 1.');
    console.assert(bernoulli(0.8).pmf(1.5) === 0, 'Error on calculating pmf of bernoulli distribution above 1.');

    // Tests for the cumulative distribution function of the bernoulli distribution.
    console.assert(bernoulli(0.35).cdf(-1) === 0, 'Error on calculating cdf of bernoulli distribution below 0.');
    console.assert(bernoulli(0.22).cdf(0) === 0.78, 'Error on calculating cdf of bernoulli distribution at 0.');
    console.assert(bernoulli(0.53).cdf(0.4) === 0.47, 'Error on calculating cdf of bernoulli distribution between 0 and 1.');
    console.assert(bernoulli(0.81).cdf(1) === 1, 'Error on calculating cdf of bernoulli distribution at 1.');
    console.assert(bernoulli(0.16).cdf(1.5) === 1, 'Error on calculating cdf of bernoulli distribution above 1.');
}