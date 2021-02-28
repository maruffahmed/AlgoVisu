import React from 'react';
import { randomNum } from 'algorithms/lib';

const SortingContext = React.createContext();
SortingContext.displayName = 'SortingContext';

function SortingContextProvider(props) {
  const [startAnimation, setStartAnimation] = React.useState(false);
  const [animationSpeed, setAnimationSpeed] = React.useState(100);
  const [totalCountedSteps, setTotalCountedSteps] = React.useState(0);
  const handleAnimationSpeed = (e) => setAnimationSpeed(e.target.value);
  // Make a random array
  const randomArr = (setNewArr) => {
    let newArr = [];
    for (let i = 0; i < 100; i++) {
      newArr.push(randomNum(500, 10000));
    }
    setNewArr(newArr);
  };

  // Js buildin sort()
  const doSort = (theArr = [], setNewArr) => {
    const newArr = [...theArr];
    newArr.sort((a, b) => a - b);
    setNewArr(newArr);
  };
  const value = {
    randomArr,
    doSort,
    animationSpeed,
    setAnimationSpeed,
    handleAnimationSpeed,
    startAnimation,
    setStartAnimation,
    totalCountedSteps,
    setTotalCountedSteps,
  };
  return <SortingContext.Provider value={value} {...props} />;
}

function useSortingContext() {
  return React.useContext(SortingContext);
}

export { SortingContextProvider, useSortingContext };
