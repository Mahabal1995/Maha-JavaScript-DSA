// Merge SOrt idea

// Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)

// Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub arrays remaining. That will be the sorted array.

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [2, 1, -1, 0, 4, 6, 3];
console.log(mergeSort(arr));

// Big-O = O(nlogn)
