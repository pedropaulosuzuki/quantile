export default function combination(a: number, b: number): number {
    if (a < 0 || b < 0) {
        throw new Error('Cannot calculate combination of negative numbers.');
    }

    if (b > a) {
        throw new Error(`Cannot calculate ${a} choose ${b}`);
    }

    if(a !== Math.floor(a) || b !== Math.floor(b)) {
        throw new Error('Cannot calculate combination of non-integer numbers.');
    }

    let result = 1;
    b = Math.min(b, a - b);
    for(let i = 0; i < b; i++) {
        result *= (a - i) / (b - i); 
    }
    return Math.round(result);
}