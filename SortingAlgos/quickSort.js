// Quick Sort Idea

// Identify the pivot element in the array
// # Pick first element as pivot
// # Pick last element as pivot ( our approach )
// # Pick a random element as pivot
// # Pick median as pivot

// Put everything that's smaller than the pivot into a 'left' array and eeverything that's grater than the pivot into a 'right' array

// Repeat the process for the individual 'left' and 'right' arrays till you have an array of lenght 1 which is sorted by definition

// Repeatedly conccatenate the left array, pivot and right array till one sorted array remains

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [2, 1, -1, 0, 4, 6, 3];
console.log(quickSort(arr));

// Worstcase Time complexity => O(n^2) => Quadratic Time complexity (for sorted arrays)
// Average Time complexity => θ(nlogn) => Logarithmic Time complexity
