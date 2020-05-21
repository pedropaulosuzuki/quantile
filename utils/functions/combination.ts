// Combination function a choose b
export default function combination(a: number, b: number): number {
    if (a < 0 || b < 0) {
        throw new Error('Cannot calculate combination of negative numbers.');
    }

    if (b > a) {
        throw new Error(`Cannot calculate ${a} choose ${b} for ${b} > ${a}.`);
    }

    if(a !== Math.floor(a) || b !== Math.floor(b)) {
        throw new Error('Cannot calculate combination of non-integer numbers.');
    }

    // Accumulator
    let result = 1;

    // Since 'a choose b' and 'a choose a - b' are similar, we choose the one with the less computing time.
    b = Math.min(b, a - b);
    for(let i = 0; i < b; i++) {
        // Example: 7 choose 3 -> (7 / 3) * (6 / 2) * (5 / 1)
        result *= (a - i) / (b - i); 
    }

    // Result should always be an integer, but floating point precision may cause rounding problems.
    return Math.round(result);
}