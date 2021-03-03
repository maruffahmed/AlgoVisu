export const BubbleSortAnimation = (sortedArr = [], speed = 10, setTotalCountedSteps) => {
  let domBar = document.getElementsByClassName('item-bar');
  for (let i = 0; i < sortedArr.length; i++) {
    let isColor = i % 3 !== 0;
    if (!isColor) {
      let [firstBar, secondBar] = sortedArr[i];
      let firstBarStyle = domBar[firstBar];
      let secondBarStyle = domBar[secondBar];
      // let color = i % 3 !== 0 ? 'red' : 'rgba(16, 185, 129, var(--tw-bg-opacity))';
      let color = 'red';
      setTimeout(() => {
        firstBarStyle.style.backgroundColor = color;
        secondBarStyle.style.backgroundColor = color;
        // firstBarStyle.classList.remove('bg-green-500');
        // secondBarStyle.classList.add('bg-green-500');
        // firstBarStyle.classList.add(color);
        // secondBarStyle.classList.add(color);
        setTotalCountedSteps((prevCount) => prevCount + 1);
      }, i * speed);
    } else {
      setTimeout(() => {
        let [selectedBar, selectedBarHeight] = sortedArr[i];
        let selectedBarStyle = domBar[selectedBar];
        selectedBarStyle.style.height = `${selectedBarHeight / 100}%`;
        // let color = i % 3 === 1 ? 'red' : 'rgba(16, 185, 129, var(--tw-bg-opacity))';
        let color = 'rgba(16, 185, 129, var(--tw-bg-opacity))';
        selectedBarStyle.style.backgroundColor = color;
        // selectedBarStyle.classList.add(color);
        // selectedBarStyle.classList.add(color);
        setTotalCountedSteps((prevCount) => prevCount + 1);
      }, i * speed);
    }
  }
};
