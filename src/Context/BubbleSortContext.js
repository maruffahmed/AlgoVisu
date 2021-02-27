import React from 'react';
import { bubbleInitialValue } from 'algorithms/lib';
const BubbleSortContext = React.createContext();
BubbleSortContext.displayName = 'BubbleSortContext';

function BubbleSortContextProvider(props) {
  const [bubbleArray, setBubbleArray] = React.useState(bubbleInitialValue);
  const value = { bubbleArray, setBubbleArray };
  return <BubbleSortContext.Provider value={value} {...props} />;
}

function useBubbleContext() {
  return React.useContext(BubbleSortContext);
}

export { useBubbleContext };

export default BubbleSortContextProvider;
