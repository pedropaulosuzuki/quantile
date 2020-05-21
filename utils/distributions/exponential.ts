class Exponential {
    constructor(private lambda: number) {
        throw new Error('Not implemented.');
    }
}

export default function exponential(lambda: number = 2) {
    return new Exponential(lambda);
};