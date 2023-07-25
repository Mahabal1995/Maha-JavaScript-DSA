function factorial(n) {
  let factorial = 1;

  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

const factorialOfANum = factorial(5);
console.log(factorialOfANum);

// Time comlexity
// O(n) -> linear time complexity
