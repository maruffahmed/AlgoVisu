function* BubbleSortSteps(arr = []) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      yield [j, j + 1];
      if (newArr[j] > newArr[j + 1]) {
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
      yield [j, newArr[j]];
      yield [j + 1, newArr[j + 1]];
    }
  }
}

export { BubbleSortSteps };
