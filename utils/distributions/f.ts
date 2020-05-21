class F {
    constructor(private d1: number, private d2: number) {
        throw new Error('Not implemented.');
    }
}

export default function f(d1: number = 2, d2: number = 2) {
    return new F(d1, d2);
};