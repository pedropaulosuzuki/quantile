import NumberSet from "../number_set.ts";

export interface DiscreteDistribution {
    readonly mean: number,
    readonly variance: number,
    readonly median: number,
    readonly mode: number
    readonly sample: number,
    samples(size: number): NumberSet,
    pmf(x: number): number,
    cdf(x: number): number
}

export interface ContinuousDistribution {
    readonly mean: number,
    readonly variance: number,
    readonly median: number,
    readonly mode: number
    readonly sample: number,
    samples(size: number): NumberSet,
    pdf(x: number): number,
    cdf(x: number): number
}