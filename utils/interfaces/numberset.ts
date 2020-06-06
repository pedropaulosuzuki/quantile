export default interface NumberSet {
    name: string;
    readonly push: (array: number[]) => NumberSet;
    readonly apply: (fn: (element: number) => number) => NumberSet;
    readonly map: (fn: (element: number) => number) => NumberSet;
    readonly sum_fn: (fn: (element: number) => number) => number;
    readonly quantile: (q: number) => number;
    readonly range: (start: number, end: number) => NumberSet;
    readonly size: number;
    readonly array: number[];
    readonly datamap: Map<number, number>;
    readonly sum: number;
    readonly mean: number;
    readonly variance: number;
    readonly median: number;
    readonly mode: Map<number, number>;
    readonly sample: number;
    readonly samples: (size: number) => NumberSet;
    [Symbol.iterator](): Generator<number, void, unknown>;
    readonly toString: () => string;
}