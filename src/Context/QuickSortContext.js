import React from 'react';
import { QuickSortAnimation } from 'algorithmAnimation';
import { QuickSortSteps } from 'algorithms';
import { useSortingContext } from './SortingContext';

const QuickSortContext = React.createContext();
QuickSortContext.displayName = 'QuickSortContext';

function QuickSortContextProvider(props) {
  const [quickArray, setQuickArray] = React.useState(null);
  const [quickBars, setQuickBars] = React.useState(25);
  const { animationSpeed, setStartAnimation, setTotalCountedSteps } = useSortingContext();

  // Buttble sort action
  const doQuickSort = (theArr = []) => {
    setStartAnimation(true);
    // QuickSort();
    let quickSortSteps = QuickSortSteps(quickArray); // Quick sort steps array
    // console.log(quickSortSteps);
    QuickSortAnimation(quickSortSteps, animationSpeed, setTotalCountedSteps);
    return quickSortSteps.length;
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
