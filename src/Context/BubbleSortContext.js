import React from 'react';
import { BubbleSortAnimation } from 'algorithmAnimation';
import { BubbleSortSteps } from 'algorithms';
import { useSortingContext } from './SortingContext';

const BubbleSortContext = React.createContext();
BubbleSortContext.displayName = 'BubbleSortContext';

function BubbleSortContextProvider(props) {
  const [bubbleArray, setBubbleArray] = React.useState(null);
  const [bubbleBars, setBubbleBars] = React.useState(15);
  const { animationSpeed, setStartAnimation, setTotalCountedSteps } = useSortingContext();

  // Buttble sort action
  const doBubbleSort = (theArr = []) => {
    setStartAnimation(true);
    // BubbleSort();
    let bubbleSortSteps = []; // Bubble sort steps array
    for (let step of BubbleSortSteps(theArr)) {
      bubbleSortSteps.push(step);
    }
    BubbleSortAnimation(bubbleSortSteps, animationSpeed, setTotalCountedSteps);
    return bubbleSortSteps.length;
  };

  const value = { bubbleArray, setBubbleArray, bubbleBars, setBubbleBars, doBubbleSort };
  return <BubbleSortContext.Provider value={value} {...props} />;
}

function useBubbleContext() {
  return React.useContext(BubbleSortContext);
}

export { useBubbleContext };

export default BubbleSortContextProvider;
