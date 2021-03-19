import React from 'react';
import { MergeSortAnimation } from 'algorithmAnimation';
import { MergeSortSteps } from 'algorithms';
import { useSortingContext } from './SortingContext';

const MergeSortContext = React.createContext();
MergeSortContext.displayName = 'MergeSortContext';

function MergeSortContextProvider(props) {
  const [mergeArray, setMergeArray] = React.useState(null);
  const [mergeBars, setMergeBars] = React.useState(50);
  const { animationSpeed, setStartAnimation, setTotalCountedSteps } = useSortingContext();

  // Buttble sort action
  const doMergeSort = (theArr = []) => {
    setStartAnimation(true);
    // QuickSort();
    let mergeSortSteps = MergeSortSteps(mergeArray); // Quick sort steps array
    MergeSortAnimation(mergeSortSteps, animationSpeed, setTotalCountedSteps);
    return mergeSortSteps.length;
  };

  const value = {
    mergeArray,
    setMergeArray,
    mergeBars,
    setMergeBars,
    doMergeSort,
  };
  return <MergeSortContext.Provider value={value} {...props} />;
}

function useMergeContext() {
  return React.useContext(MergeSortContext);
}

export { useMergeContext };

export default MergeSortContextProvider;
