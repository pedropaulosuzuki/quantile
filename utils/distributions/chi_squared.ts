class ChiSquared {
    constructor(private k: number) {
        throw new Error('Not implemented.');
    }
}

export default function chi_squared(k: number = 2) {
    return new ChiSquared(k);
};