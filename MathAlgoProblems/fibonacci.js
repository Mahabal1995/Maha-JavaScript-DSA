function fibonacci(n) {
  const fibonacciSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }

  return fibonacciSequence;
}

const fibonacciSeries = fibonacci(10);
console.log(fibonacciSeries);

// Big-O
// time-complexity -> O(n) -> linear time complexity
