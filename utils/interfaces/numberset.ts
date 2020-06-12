export default interface Numberset {
    name: string;
    readonly push: (array: number[]) => Numberset;
    readonly apply: (fn: (element: number) => number) => Numberset;
    readonly map: (fn: (element: number) => number) => Numberset;
    readonly sum_fn: (fn: (element: number) => number) => number;
    readonly quantile: (q: number) => number;
    readonly range: (start: number, end: number) => Numberset;
    readonly size: number;
    readonly array: number[];
    readonly datamap: Map<number, number>;
    readonly sum: number;
    readonly mean: number;
    readonly variance: number;
    readonly median: number;
    readonly mode: Map<number, number>;
    readonly sample: number;
    readonly samples: (size: number) => Numberset;
    [Symbol.iterator](): Generator<number, void, unknown>;
    readonly toString: () => string;
}