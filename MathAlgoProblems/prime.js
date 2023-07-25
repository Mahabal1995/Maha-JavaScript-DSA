function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(Math.pow(2, 31) - 1));

// Time comlexity
// O(sqrt(n)) -> linear time complexity
