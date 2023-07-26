//  n! = n * n-1!

function recursiveFactorial(n) {
  if (n === 0) return 1;

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

// time complexity
// O(n) => linear time complexity
