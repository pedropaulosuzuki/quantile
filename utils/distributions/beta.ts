class Beta {
    constructor(private a: number, private b: number) {
        throw new Error('Not implemented.');
    }
}

export default function beta(a: number = 0.5, b: number = 10) {
    return new Beta(a, b);
};