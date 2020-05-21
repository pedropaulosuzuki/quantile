class LogNormal {
    constructor(private _mean: number, private stdev: number) {
        throw new Error('Not implemented.');
    }
}

export default function log_normal(mean: number, stdev: number) {
    return new LogNormal(mean, stdev);
};