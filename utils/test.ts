import bernoulli_test from "./tests/bernoulli_test.ts";
import binomial_test from "./tests/binomial_test.ts";
import rayleigh_test from "./tests/rayleigh_test.ts";
import uniform_test from "./tests/uniform_test.ts";

bernoulli_test();
binomial_test();
rayleigh_test();
uniform_test();


console.log('All tests ran successfully.');