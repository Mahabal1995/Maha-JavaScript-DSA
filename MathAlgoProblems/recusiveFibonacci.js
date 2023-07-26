// Given a number 'n', find the nth element of the Fibonacci sequence

// main business logic => f(n) = f(n-1) + f(n-2)
// base case => f(0) = 0 and f(1) = 1

function recursiveFibonacci(n) {
  // 5, 4,
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(5));

// 0, 1, 1, 2, 3, 5, 8

// Time Complexity
// O(2^n) time complexity => for recursive solution
// O(n) time complexity => for iterative solution
