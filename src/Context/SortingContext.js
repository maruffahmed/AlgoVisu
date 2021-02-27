import React from 'react';
import { BubbleSortSteps } from 'algorithms';
import { randomNum } from 'algorithms/lib';
import { BubbleSortAnimation } from 'algorithmAnimation';

const SortingContext = React.createContext();
SortingContext.displayName = 'SortingContext';

function SortingContextProvider(props) {
  const [startAnimation, setStartAnimation] = React.useState(false);
  const [animationSpeed, setAnimationSpeed] = React.useState(100);
  const handleAnimationSpeed = (e) => setAnimationSpeed(e.target.value);
  // Make a random array
  const randomArr = (setNewArr) => {
    let newArr = [];
    for (let i = 0; i < 100; i++) {
      newArr.push(randomNum(500, 10000));
    }
    setNewArr(newArr);
  };
  // Buttble sort action
  const doBubbleSort = (theArr = []) => {
    setStartAnimation(true);
    // BubbleSort();
    let bubbleSortSteps = []; // Bubble sort steps array
    for (let step of BubbleSortSteps(theArr)) {
      bubbleSortSteps.push(step);
    }
    console.log(bubbleSortSteps);
    // console.log(bubbleSortSteps);
    BubbleSortAnimation(bubbleSortSteps, animationSpeed);
  };

  // Js buildin sort()
  const doSort = (theArr = [], setNewArr) => {
    const newArr = [...theArr];
    newArr.sort((a, b) => a - b);
    setNewArr(newArr);
  };
  const value = {
    randomArr,
    doBubbleSort,
    doSort,
    animationSpeed,
    setAnimationSpeed,
    handleAnimationSpeed,
    startAnimation,
    setStartAnimation,
  };
  return <SortingContext.Provider value={value} {...props} />;
}

function useSortingContext() {
  return React.useContext(SortingContext);
}

export { SortingContextProvider, useSortingContext };
