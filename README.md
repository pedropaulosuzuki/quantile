# Quantile
### What is quantile?
Quantile is a lightweight Typescript library aimed to be used mainly on simple statistics analysis. In the future, it is expected to have bigger functionality, such as regression analysis, multivariable statistics, and much more.

### In what state is quantile right now? 
As of now, Quantile is in its early stages. It is possible at the moment to generate samples from some distributions, and get some values from those aswell. The NumberSet class can also be used for analyzing single variables, but is still not feature-complete.

### How can I use quantile?
The central element in Quantile today is the **NumberSet** class. It can be instantiated from an array, but it is also expected to be used in the future with Maps aswell. The main purpose of the NumberSet class is to provide an easy method for dealing with sets of numbers of single variables. Thus, simple operations, such as getting the size, sum, mean, median, mode, variance or specific quantiles of a dataset is easier than ever. 


```ts
import quantile from './quantile.ts';

const { NumberSet } = quantile;

let data = new NumberSet([1, 2, 3, 4, 5, 6, 7]);
  
let size = data.size;
let mean = data.mean;
let median = data.median;
let mode = data.mode;
let variance = data.variance;
let sum = data.sum();
let q0 = data.quantile(0);
let q1 = data.quantile(0.25);
let q2 = data.quantile(0.5);
let q3 = data.quantile(0.75);
let q4 = data.quantile(1);
  
  console.log({size, mean, median, mode, variance, sum, q0, q1, q2, q3, q4});
```

#### It is also possible to:

Mutate every element in the dataset through a callback function:
```ts
import quantile from './quantile.ts';

const { NumberSet } = quantile;

let data = new NumberSet([1, 2, 3, 4, 5, 6, 7]);

data.apply(x => x - data.mean);

console.log('data', data.array); // [-3, -2, -1, 0, 1, 2, 3]
```
Map the existing dataset into a new dataset through a callback function:
```ts
import quantile from './quantile.ts';

const { NumberSet } = quantile;

let data = new NumberSet([1, 2, 3, 4, 5, 6, 7]);
  
let data_squared = data.map(x => x ** 2);

console.log('mean', data_squared.array); // [1, 4, 9, 16, 25, 36, 49]
```
Filter elements from a certain range:
```ts
import quantile from './quantile.ts';

const { NumberSet } = quantile;

let data = new NumberSet([1, 2, 3, 4, 5, 6, 7]);

let q1 = data.quantile(0.25);
let q3 = data.quantile(0.75);

let filtered = data.range(q1, q3);

console.log(filtered.array); // [3, 4, 5]
```
Get n samples from the dataset:
```ts
import quantile from './quantile.ts';

const { NumberSet } = quantile;

let data = new NumberSet([1, 2, 3, 4, 5, 6, 7]);
  
let sample = data.sample(100);

console.log(sample.datamap);
```
Get an array or a JS Map representation of the dataset:
```ts
import quantile from './quantile.ts';

const { NumberSet } = quantile;

let data = new NumberSet([1, 2, 3, 4, 5, 6, 7]);
  
let array = data.array;
let datamap = data.datamap;

console.log({array, datamap});
```
Get a custom sum from the dataset:
```ts
import quantile from './quantile.ts';

const { NumberSet } = quantile;

let data = new NumberSet([1, 2, 3, 4, 5, 6, 7]);
  
let sum_cubes = data.sum(x => x ** 3);

console.log({sum_cubes}); // { sum_cubes: 784 }
```

### Quantile also provides methods for dealing with famous probability distributions
[Work in progress]...
