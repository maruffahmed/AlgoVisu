import React from 'react';
import { randomNum } from 'algorithms/lib';
const BubbleSortContext = React.createContext();
BubbleSortContext.displayName = 'BubbleSortContext';

function BubbleSortContextProvider(props) {
  const [bubbleArray, setBubbleArray] = React.useState(null);
  const [bubbleBars, setBubbleBars] = React.useState(15);
  const genRandomBubbleArray = (bars = 10) => {
    let newBubbleArray = [];
    for (let i = 0; i < bars; i++) {
      newBubbleArray.push(randomNum(500, 10000));
    }
    setBubbleArray(newBubbleArray);
  };
  const value = { bubbleArray, setBubbleArray, genRandomBubbleArray, bubbleBars, setBubbleBars };
  return <BubbleSortContext.Provider value={value} {...props} />;
}

function useBubbleContext() {
  return React.useContext(BubbleSortContext);
}

export { useBubbleContext };

export default BubbleSortContextProvider;
