class Kumaraswamy {
    constructor(private a: number, private b: number) {
        throw new Error('Not implemented.');
    }
}

export default function kumaraswamy(a: number, b: number) {
    return new Kumaraswamy(a, b);
};