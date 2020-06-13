import DataSet from './interfaces/dataset.ts';
import Numberset from './numberset.ts';

class Dataset implements DataSet {
    constructor(private numberset_array: Numberset[]) {
        
    }
}