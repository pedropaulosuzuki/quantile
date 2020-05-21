class StudentT {
    constructor(private df: number) {
        throw new Error('Not implemented.');
    }
}

export default function t(df: number = 10) {
    return new StudentT(df);
};