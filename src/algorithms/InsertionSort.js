function* InsertionSortSteps(arr = []) {
  const newArr = [...arr];
  for (let i = 1; i < newArr.length; i++) {
    let key = newArr[i];
    let j = i - 1;
    yield [i];
    while (j >= 0 && newArr[j] > key) {
      yield [j + 1, j];
      newArr[j + 1] = newArr[j];
      yield [j + 1, newArr[j + 1]];
      yield [j, key];
      j--;
    }
    newArr[j + 1] = key;
  }
}

export { InsertionSortSteps };
