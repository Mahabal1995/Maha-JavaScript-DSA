function bubbleSort(arr) {
  let isSwapped = false;

  do {
    isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);

  return arr;
}

const arr = [2, 1, -1, 0, 4, 6, 3];
console.log(bubbleSort(arr));

// Time complexity => O(n^2) => Quadratic Time complexity
