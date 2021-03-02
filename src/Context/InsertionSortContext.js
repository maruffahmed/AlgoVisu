import React from 'react';
import { randomNum } from 'algorithms/lib';
// import { BubbleSortAnimation } from 'algorithmAnimation';
import { InsertionSortSteps } from 'algorithms';
import { useSortingContext } from './SortingContext';

const InsertionSortContext = React.createContext();
InsertionSortContext.displayName = 'InsertionSortContext';

function InsertionSortContextProvider(props) {
  const [insertionleArray, setInsertionArray] = React.useState(null);
  const [insertionBars, setInsertionBars] = React.useState(15);
  const { animationSpeed, setStartAnimation, setTotalCountedSteps } = useSortingContext();

  const genRandomInsertionArray = (bars = 10) => {
    let newInsertionArray = [];
    for (let i = 0; i < bars; i++) {
      newInsertionArray.push(randomNum(500, 10000));
    }
    setInsertionArray(newInsertionArray);
  };

  // Buttble sort action
  const doInsertionSort = (theArr = []) => {
    setStartAnimation(true);
    // InsertionSort();
    let insertionSortSteps = []; // Insertion sort steps array
    for (let step of InsertionSortSteps(theArr)) {
      InsertionSortSteps.push(step);
    }
    console.log(InsertionSortSteps);
    // console.log(InsertionSortSteps);
    // BubbleSortAnimation(bubbleSortSteps, animationSpeed, setTotalCountedSteps);
    return insertionSortSteps.length;
  };

  const value = {
    insertionleArray,
    setInsertionArray,
    genRandomInsertionArray,
    insertionBars,
    setInsertionBars,
    doInsertionSort,
  };
  return <InsertionSortContext.Provider value={value} {...props} />;
}

function useInsertionContext() {
  return React.useContext(InsertionSortContext);
}

export { useInsertionContext };

export default InsertionSortContextProvider;
