function insertionSort(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

const arr = [2, 1, -1, 0, 4, 6, 3];
console.log(insertionSort(arr));

// Time complexity => O(n^2) => Quadratic Time complexity
