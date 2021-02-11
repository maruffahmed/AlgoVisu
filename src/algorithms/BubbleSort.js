function BubbleSort(arr = []) {
  let sortedArr = [...arr];
  for (let i = sortedArr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }
  return sortedArr;
}

function* BubbleSortSteps(arr = []) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }

      yield arr;
    }
  }
}

export default BubbleSort;
export { BubbleSortSteps };
