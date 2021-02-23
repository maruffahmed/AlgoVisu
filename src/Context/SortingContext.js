import React from 'react';
import { BubbleSortSteps } from 'algorithms';
import { initialValue, randomNum } from 'algorithms/lib';
import { BubbleSortAnimation } from 'algorithmAnimation';

const SortingContext = React.createContext();
SortingContext.displayName = 'SortingContext';

function SortingContextProvider(props) {
  const [initialArray, setInitialArray] = React.useState(initialValue); // Unsorted initial array
  // Make a random array
  const randomArr = () => {
    let newArr = [];
    for (let i = 0; i < 100; i++) {
      newArr.push(randomNum(500, 10000));
    }
    setInitialArray(newArr);
  };
  // Buttble sort action
  const doBubbleSort = () => {
    // BubbleSort();
    let bubbleSortSteps = []; // Bubble sort steps array
    for (let step of BubbleSortSteps(initialArray)) {
      bubbleSortSteps.push(step);
    }
    // console.log(bubbleSortSteps);
    BubbleSortAnimation(bubbleSortSteps);
  };

  // Js buildin sort()
  const doSort = () => {
    const newArr = [...initialArray];
    newArr.sort((a, b) => a - b);
    setInitialArray(newArr);
  };
  const value = { initialArray, randomArr, doBubbleSort, doSort };
  return <SortingContext.Provider value={value} {...props} />;
}

function useSortingContext() {
  return React.useContext(SortingContext);
}

export { SortingContextProvider, useSortingContext };
