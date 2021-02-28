import React from 'react';
import { randomNum } from 'algorithms/lib';
import { BubbleSortAnimation } from 'algorithmAnimation';
import { BubbleSortSteps } from 'algorithms';
import { useSortingContext } from './SortingContext';

const BubbleSortContext = React.createContext();
BubbleSortContext.displayName = 'BubbleSortContext';

function BubbleSortContextProvider(props) {
  const [bubbleArray, setBubbleArray] = React.useState(null);
  const [bubbleBars, setBubbleBars] = React.useState(15);
  const { animationSpeed, setStartAnimation, setTotalCountedSteps } = useSortingContext();

  const genRandomBubbleArray = (bars = 10) => {
    let newBubbleArray = [];
    for (let i = 0; i < bars; i++) {
      newBubbleArray.push(randomNum(500, 10000));
    }
    setBubbleArray(newBubbleArray);
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
    BubbleSortAnimation(bubbleSortSteps, animationSpeed, setTotalCountedSteps);
    return bubbleSortSteps.length;
  };

  const value = { bubbleArray, setBubbleArray, genRandomBubbleArray, bubbleBars, setBubbleBars, doBubbleSort };
  return <BubbleSortContext.Provider value={value} {...props} />;
}

function useBubbleContext() {
  return React.useContext(BubbleSortContext);
}

export { useBubbleContext };

export default BubbleSortContextProvider;
