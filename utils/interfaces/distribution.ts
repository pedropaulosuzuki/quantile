import NumberSet from "../numberset.ts";

export interface DiscreteDistribution {
    readonly mean: number,
    readonly variance: number,
    readonly median: number,
    readonly mode: number
    readonly sample: number,
    readonly samples: (name: string, size: number) => NumberSet,
    readonly pmf: (x: number) => number,
    readonly cdf: (x: number) => number
}

export interface ContinuousDistribution {
    readonly mean: number,
    readonly variance: number,
    readonly median: number,
    readonly mode: number
    readonly sample: number,
    readonly samples: (name: string, size: number) => NumberSet,
    readonly pdf: (x: number) => number,
    readonly cdf: (x: number) => number
}