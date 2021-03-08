export const MergeSortAnimation = (sortedArr = [], speed = 10, setTotalCountedSteps) => {
  let domBar = document.getElementsByClassName('item-bar');
  // let it = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    let needToPlace = sortedArr[i].length > 1;
    if (!needToPlace) {
      if (sortedArr[i].hasOwnProperty('i')) {
        let [theBar] = sortedArr[i].i;
        let selectTheBar = domBar[theBar];
        // let color = i % 3 !== 0 ? 'red' : 'rgba(16, 185, 129, var(--tw-bg-opacity))';
        let color = 'rgba(245, 158, 11, var(--tw-bg-opacity))';
        setTimeout(() => {
          selectTheBar.style.backgroundColor = color;
          setTotalCountedSteps((prevCount) => prevCount + 1);
        }, i * speed);
      } else {
        let [theBar] = sortedArr[i].j;
        let selectTheBar = domBar[theBar];
        // let color = i % 3 !== 0 ? 'red' : 'rgba(16, 185, 129, var(--tw-bg-opacity))';
        let color = 'rgba(245, 158, 11, var(--tw-bg-opacity))';
        setTimeout(() => {
          selectTheBar.style.backgroundColor = color;
          setTotalCountedSteps((prevCount) => prevCount + 1);
        }, i * speed);
      }
    } else {
      // let needToColor = it % 3 === 1;
      setTimeout(() => {
        // if (needToColor) {
        //   let [firstBar, secondBar] = sortedArr[i];
        //   let selectFirstBar = domBar[firstBar];
        //   let selectSecondtBar = domBar[secondBar];
        //   selectFirstBar.style.backgroundColor = 'red';
        //   selectSecondtBar.style.backgroundColor = 'red';
        // } else {
        // }
        if (sortedArr[i].hasOwnProperty('i')) {
          let [{ i: theBar }, theHeight] = sortedArr[i];
          let selectTheBar = domBar[theBar];
          selectTheBar.style.height = `${theHeight / 100}%`;
          selectTheBar.style.backgroundColor = 'rgba(16, 185, 129, var(--tw-bg-opacity))';
        } else {
          let [{ j: theBar }, theHeight] = sortedArr[i];
          let selectTheBar = domBar[theBar];
          selectTheBar.style.height = `${theHeight / 100}%`;
          selectTheBar.style.backgroundColor = 'rgba(16, 185, 129, var(--tw-bg-opacity))';
        }
      }, i * speed);
      // it++;
      setTotalCountedSteps((prevCount) => prevCount + 1);
    }
  }
};
