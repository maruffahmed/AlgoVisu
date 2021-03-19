export const MergeSortAnimation = (sortedArr = [], speed = 10, setTotalCountedSteps) => {
  let domBar = document.getElementsByClassName('item-bar');
  // let it = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    let isColor = i % 3 !== 2;

    if (isColor) {
      let [firstBar, secondBar] = sortedArr[i];
      let selectFirstBar = domBar[firstBar];
      let selectSecondtBar = domBar[secondBar];
      let color = i % 3 === 0 ? 'red' : 'rgba(16, 185, 129, var(--tw-bg-opacity))';
      // let color = 'rgba(245, 158, 11, var(--tw-bg-opacity))';
      setTimeout(() => {
        selectFirstBar.style.backgroundColor = color;
        selectSecondtBar.style.backgroundColor = color;
        setTotalCountedSteps((prevCount) => prevCount + 1);
      }, i * speed);
    } else {
      setTimeout(() => {
        let [theBar, theHeight] = sortedArr[i];
        let selectTheBar = domBar[theBar];
        selectTheBar.style.height = `${theHeight / 100}%`;
        // selectTheBar.style.backgroundColor = 'rgba(16, 185, 129, var(--tw-bg-opacity))';
      }, i * speed);
      // it++;
      setTotalCountedSteps((prevCount) => prevCount + 1);
    }
  }
};
