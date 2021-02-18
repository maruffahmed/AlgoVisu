function swapWithDispatch(arr, index1, index2, count, dispatch) {
  let temp = arr[index1];
  setTimeout(function () {
    arr[index1] = arr[index2];
    arr[index2] = temp;
    dispatch({ type: 'SETNEW', payload: arr });
  }, count * 1);
}

function useBubbleSort(arr = [], dispatch) {
  let sortedArr = [...arr];
  let count = 0;
  return function BubbleSort() {
    for (let i = sortedArr.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        swapWithDispatch(sortedArr, j, j + 1, count, dispatch);
        count++;
      }
    }
    return sortedArr;
  };
}

function* BubbleSortSteps(arr = []) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      yield [j, j + 1];
      yield [j, j + 1];
      if (newArr[j] > newArr[j + 1]) {
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
      yield [j, newArr[j]];
    }
  }
}

export { BubbleSortSteps, useBubbleSort };
