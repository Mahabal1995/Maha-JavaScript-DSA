// Problem : Given sorted array of n elements and a target element 't', find the index of 't' in the array. return -1 if the target element is not found.

// Binary search is suitable for only sorted arrays
// if arrays are not sorted then use linear search or sort the array and the use binary search

// pseudocode for binary search

// # if the array is empty, return -1 as the element cannot be found.
// # if the array has elements,
//     -> find the middle element of the array
//     -> if the target is equal to the middle element, return the middle element index
//     -> if the target is less than the middle element, binary search left half of the array
//     -> if the target is greater than the middle element, binary search right half of the array

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (array[middleIndex] === target) {
      return middleIndex;
    }

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

const array = [1, 2, 3, 4, -2, 10];

console.log(binarySearch(array, -1));
console.log(binarySearch(array, 3));
console.log(binarySearch(array, -3));

// Time complexity
// O(log n) => logarithmic time complexity

// log 6 of base 10 => 0.7781 can be found in the logarithmic table
