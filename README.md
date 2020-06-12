# Quantile
### What is quantile?
Quantile is a lightweight Typescript library aimed to be used mainly on simple statistics analysis. In the future, it is expected to have bigger functionality, such as regression analysis, multivariable statistics, and much more.

### In what state is quantile right now? 
As of now, Quantile is in its early stages. It is possible at the moment to generate samples from some distributions, and get some values from those aswell. The Numberset class can also be used for analyzing single variables, but is still not feature-complete.

### How can I use quantile?
The central element in Quantile today is the **Numberset** class. It can be instantiated from an array, but it is also expected to be used in the future with Maps aswell. The main purpose of the Numberset class is to provide an easy method for dealing with sets of numbers of single variables. Thus, simple operations, such as getting the size, sum, mean, median, mode, variance or specific quantiles of a dataset is easier than ever. 


```ts
import quantile from './quantile.ts';

const { Numberset } = quantile;

const data = new Numberset('data', [1, 2, 3, 4, 5, 6, 7]);

const size = data.size;
const mean = data.mean;
const median = data.median;
const mode = data.mode;
const variance = data.variance;
const sum = data.sum;
const q0 = data.quantile(0);
const q1 = data.quantile(0.25);
const q2 = data.quantile(0.5);
const q3 = data.quantile(0.75);
const q4 = data.quantile(1);
  
console.log({size, mean, median, mode, variance, sum, q0, q1, q2, q3, q4});
```

#### It is also possible to:

Mutate every element in the numberset through a callback function:
```ts
import quantile from './quantile.ts';

const { Numberset } = quantile;

const data = new Numberset('data', [1, 2, 3, 4, 5, 6, 7]);

data.apply(x => x - data.mean);

console.log('data', data.array); // [-3, -2, -1, 0, 1, 2, 3]
```
Map the existing numberset into a new numberset through a callback function:
```ts
import quantile from './quantile.ts';

const { Numberset } = quantile;

const data = new Numberset('data', [1, 2, 3, 4, 5, 6, 7]);
  
const data_squared = data.map(x => x ** 2);

console.log('mean', data_squared.array); // [1, 4, 9, 16, 25, 36, 49]
```
Filter elements from a certain range:
```ts
import quantile from './quantile.ts';

const { Numberset } = quantile;

const data = new Numberset('data', [1, 2, 3, 4, 5, 6, 7]);

const q1 = data.quantile(0.25);
const q3 = data.quantile(0.75);

const filtered = data.range(q1, q3);

console.log(filtered.array); // [3, 4, 5]
```
Get one or N samples from the numberset:
```ts
import quantile from './quantile.ts';

const { Numberset } = quantile;

const data = new Numberset('data', [1, 2, 3, 4, 5, 6, 7]);
  
const sample = data.sample;
const samples = data.samples('sample_500', 500);

console.log({sample});
console.log('500 samples:', samples.datamap);
```
Get an array or a JS Map representation of the numberset:
```ts
import quantile from './quantile.ts';

const { Numberset } = quantile;

const data = new Numberset('data', [1, 2, 3, 4, 5, 6, 7]);
  
const array = data.array;
const datamap = data.datamap;

console.log({array, datamap});
```
Get a custom sum from the numberset:
```ts
import quantile from './quantile.ts';

const { Numberset } = quantile;

const data = new Numberset('data', [1, 2, 3, 4, 5, 6, 7]);
  
const sum_cubes = data.sum_fn(x => x ** 3);

console.log({sum_cubes}); // { sum_cubes: 784 }
```

### Quantile also provides methods for dealing with famous probability distributions
[Work in progress]...
