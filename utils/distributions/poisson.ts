class Poisson {
    constructor(private lambda: number) {
        throw new Error('Not implemented.');
    }
}

export default function poisson(lambda: number): Poisson {
    return new Poisson(lambda);
};