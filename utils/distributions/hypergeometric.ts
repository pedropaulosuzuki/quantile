class Hypergeometric {
    constructor(private N: number, private K: number, private n: number) {
        throw new Error('Not implemented.');
    }
}

export default function hypergeometric(N: number, K: number, n: number) {
    return new Hypergeometric(N, K, n);
};