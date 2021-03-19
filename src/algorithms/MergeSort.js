let countSteps = [];

function merge(arr, start, mid, end, otherArr) {
  let k = start;
  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    countSteps.push([i, j]);
    countSteps.push([i, j]);
    if (otherArr[i] <= otherArr[j]) {
      countSteps.push([k, otherArr[i]]);
      arr[k++] = otherArr[i++];
    } else {
      countSteps.push([k, otherArr[j]]);
      arr[k++] = otherArr[j++];
    }
  }

  while (i <= mid) {
    countSteps.push([i, i]);
    countSteps.push([i, i]);
    countSteps.push([k, otherArr[i]]);
    arr[k++] = otherArr[i++];
  }

  while (j <= end) {
    countSteps.push([j, j]);
    countSteps.push([j, j]);
    countSteps.push([k, otherArr[j]]);
    arr[k++] = otherArr[j++];
  }
}

function mergeSort(arr, start, end, otherArr) {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(otherArr, start, mid, arr);
  mergeSort(otherArr, mid + 1, end, arr);
  merge(arr, start, mid, end, otherArr);
}

function MergeSortSteps(arr) {
  let newArr = [...arr];
  let otherArr = [...arr];
  countSteps = [];
  mergeSort(newArr, 0, newArr.length - 1, otherArr);
  return countSteps;
}

export { mergeSort, MergeSortSteps };
