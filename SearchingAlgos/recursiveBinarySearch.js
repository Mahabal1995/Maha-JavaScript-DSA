function recursiveBinarySearch(arrar, target) {
  return binarySearch(array, target, 0, arrar.length - 1);
}

function binarySearch(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (array[middleIndex] === target) return middleIndex;

  if (target < array[middleIndex]) {
    return binarySearch(array, target, leftIndex, middleIndex - 1);
  } else {
    return binarySearch(array, target, middleIndex + 1, rightIndex);
  }
}

const array = [1, 2, 3, 4, 10]; // always this should be sorted

console.log(recursiveBinarySearch(array, 10));
console.log(recursiveBinarySearch(array, 3));
console.log(recursiveBinarySearch(array, 2));
