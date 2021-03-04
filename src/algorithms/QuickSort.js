let Steps = [];

function Swap(arr, first, second) {
  [arr[first], arr[second]] = [arr[second], arr[first]];
}

function Pertition(arr, low, high) {
  let pivot = arr[high];
  Steps.push([high]);
  let left = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      left++;
      Swap(arr, left, j);
      Steps.push([j, left]);
      Steps.push([j, arr[j]]);
      Steps.push([left, arr[left]]);
    }
  }
  Swap(arr, left + 1, high);
  Steps.push([high, left + 1]);
  Steps.push([high, arr[high]]);
  Steps.push([left + 1, arr[left + 1]]);
  return left + 1;
}

function QuickSort(arr, low, high) {
  if (low < high) {
    let pi = Pertition(arr, low, high);
    QuickSort(arr, low, pi - 1);
    QuickSort(arr, pi + 1, high);
  }
}

function QuickSortSteps(arr = []) {
  let newArr = [...arr];
  Steps = [];
  QuickSort(newArr, 0, newArr.length - 1);
  return Steps;
}

export { QuickSort, QuickSortSteps };
