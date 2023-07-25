function isPowOf2(n) {
  if (n === 1) return true; // 2^0 = 1

  if (n % 2 === 0) {
    for (let i = 2; i < n; i++) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isPowOf2(8));
console.log(isPowOf2(14));
// Time comlexity
// O(log n) -> logarithmic time complexity

function isPowOf2Bitwise(n) {
  if (n < 0) return false;

  return (n & (n - 1)) === 0;
}

//  n= 5        101
//  n-1 = 4     100
//  n & n-1     100 !== 0 -> false

//  n= 8        1000
//  n-1 = 4     0111
//  n & n-1     0000 === 0 -> true

console.log(isPowOf2Bitwise(8));
console.log(isPowOf2Bitwise(14));
// Time comlexity
// O(1) -> constant time complexity
