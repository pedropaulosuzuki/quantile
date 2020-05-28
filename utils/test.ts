import test_bernoulli from "./tests/test_bernoulli.ts";
import test_beta from "./tests/test_beta.ts";
import test_binomial from "./tests/test_binomial.ts";
import test_rayleigh from "./tests/test_rayleigh.ts";
import test_uniform from "./tests/test_uniform.ts";

test_bernoulli();
test_beta();
test_binomial();
test_rayleigh();
test_uniform();


console.log('All tests ran successfully.');