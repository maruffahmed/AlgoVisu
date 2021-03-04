function Swap(arr, first, second) {
  [arr[first], arr[second]] = [arr[second], arr[first]];
}

function Pertition(arr, low, high) {
  let pivot = arr[high];
  let left = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      left++;
      Swap(arr, left, j);
    }
  }
  Swap(arr, left + 1, high);
  return left + 1;
}

function QuickSort(arr, low, high) {
  if (low < high) {
    let pi = Pertition(arr, low, high);
    QuickSort(arr, low, pi - 1);
    QuickSort(arr, pi + 1, high);
  }
}

export { QuickSort };
