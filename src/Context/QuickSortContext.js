import React from 'react';
// import { InsertionSortAnimation } from 'algorithmAnimation';
// import { InsertionSortSteps } from 'algorithms';
import { useSortingContext } from './SortingContext';

const QuickSortContext = React.createContext();
QuickSortContext.displayName = 'QuickSortContext';

function QuickSortContextProvider(props) {
  const [quickArray, setQuickArray] = React.useState(null);
  const [quickBars, setQuickBars] = React.useState(15);
  const { animationSpeed, setStartAnimation, setTotalCountedSteps } = useSortingContext();

  // Buttble sort action
  const doQuickSort = (theArr = []) => {
    setStartAnimation(true);
    // InsertionSort();
    let insertionSortSteps = []; // Insertion sort steps array
    // for (let step of InsertionSortSteps(theArr)) {
    //   insertionSortSteps.push(step);
    // }
    // InsertionSortAnimation(insertionSortSteps, animationSpeed, setTotalCountedSteps);
    return insertionSortSteps.length;
  };

  const value = {
    quickArray,
    setQuickArray,
    quickBars,
    setQuickBars,
    doQuickSort,
  };
  return <QuickSortContext.Provider value={value} {...props} />;
}

function useQuickContext() {
  return React.useContext(QuickSortContext);
}

export { useQuickContext };

export default QuickSortContextProvider;
