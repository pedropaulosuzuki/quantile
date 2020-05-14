import quantile from '../../quantile.ts';

const uniform = quantile.distributions.uniform;

/// Test
export default function test_uniform() {
    // Tests for the mean, variance and median of the uniform distribution.
    console.assert(uniform(0, 6).mean === 3, 'Error on calculating the mean of uniform distribution.');
    console.assert(uniform(1, 13).variance === 12, 'Error on calculating the variance of uniform distribution.');
    console.assert(uniform(-2, 2).median === 0, 'Error on calculating the median uniform distribution.');

    // Tests for the probability density function of the uniform distribution.
    console.assert(uniform(-3, 5).pdf(-4) === 0, 'Error on calculating pdf of uniform distribution when lower on bounds.');
    console.assert(uniform(1, 5).pdf(1) === 0.25, 'Error on calculating pdf of uniform distribution when at the lower bound.');
    console.assert(uniform(2, 22).pdf(15) === 0.05, 'Error on calculating pdf of uniform distribution when inside bounds.');
    console.assert(uniform(0, 10).pdf(10) === 0.1, 'Error on calculating pdf of uniform distribution when at the upper bound.');
    console.assert(uniform(-4, 7).pdf(18) === 0, 'Error on calculating pdf of uniform distribution when above on bounds.');

    // Tests for the cumulative distribution function of the uniform distribution.
    console.assert(uniform(-3, 5).cdf(-4) === 0, 'Error on calculating pdf of uniform distribution when lower on bounds.');
    console.assert(uniform(1, 5).cdf(1) === 0, 'Error on calculating pdf of uniform distribution when at the lower bound.');
    console.assert(uniform(2, 22).cdf(12) === 0.5, 'Error on calculating pdf of uniform distribution when inside bounds.');
    console.assert(uniform(0, 10).cdf(10) === 1, 'Error on calculating pdf of uniform distribution when at the upper bound.');
    console.assert(uniform(-4, 7).cdf(18) === 1, 'Error on calculating pdf of uniform distribution when above on bounds.');
}
