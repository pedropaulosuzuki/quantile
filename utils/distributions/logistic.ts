class Logistic {
    constructor(private _mean: number, private scale: number) {
        throw new Error('Not implemented.');
    }
}

export default function logistic(mean: number, scale: number) {
    return new Logistic(mean, scale);
};