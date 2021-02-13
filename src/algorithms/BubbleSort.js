function swapWithDispatch(arr, index1, index2, count, dispatch) {
  setTimeout(function () {
    swap(arr, index1, index2);
    dispatch({ type: 'SETNEW', payload: arr });
    console.log('Doing');
  }, count * 1000);
}
function swap(arr, index1, index2, count) {
  return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  setTimeout(function () {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }, count * 1);
}

function useBubbleSort(arr = [], dispatch) {
  let sortedArr = [...arr];
  let count = 0;
  return async function BubbleSort() {
    for (let i = sortedArr.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          // swapWithDispatch(sortedArr, j, j + 1, count, dispatch);
          await swap(sortedArr, j, j + 1, count);
        }
        dispatch({ type: 'SETNEW', payload: sortedArr });
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
      if (newArr[j] > newArr[j + 1]) {
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
      yield newArr;
    }
  }
}
export { BubbleSortSteps, useBubbleSort };
