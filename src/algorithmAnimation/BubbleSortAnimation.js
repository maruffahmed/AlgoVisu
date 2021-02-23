export const BubbleSortAnimation = (sortedArr) => {
  let domBar = document.getElementsByClassName('item-bar');
  for (let i = 0; i < sortedArr.length; i++) {
    let isColor = i % 3 !== 0;
    if (!isColor) {
      let [firstBar, secondBar] = sortedArr[i];
      let firstBarStyle = domBar[firstBar].style;
      let secondBarStyle = domBar[secondBar].style;
      // let color = i % 3 !== 0 ? 'red' : 'rgba(16, 185, 129, var(--tw-bg-opacity))';
      let color = 'red';
      setTimeout(() => {
        firstBarStyle.backgroundColor = color;
        secondBarStyle.backgroundColor = color;
      }, i * 50);
    } else {
      setTimeout(() => {
        let [selectedBar, selectedBarHeight] = sortedArr[i];
        let selectedBarStyle = domBar[selectedBar].style;
        selectedBarStyle.height = `${selectedBarHeight / 100}%`;
        let color = i % 3 !== 1 ? 'red' : 'rgba(16, 185, 129, var(--tw-bg-opacity))';
        selectedBarStyle.backgroundColor = color;
      }, i * 50);
    }
  }
};
