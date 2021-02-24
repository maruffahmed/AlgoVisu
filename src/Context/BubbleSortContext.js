import React from 'react';
import { bubbleInitialValue } from 'algorithms/lib';
const BubbleSortContext = React.createContext();
BubbleSortContext.displayName = 'BubbleSortContext';

function BubbleSortContextProvider(props) {
  const [bubbleArray] = React.useState(bubbleInitialValue);
  const value = { bubbleArray };
  return <BubbleSortContext.Provider value={value} {...props} />;
}

function useBubbleContext() {
  return React.useContext(BubbleSortContext);
}

export { useBubbleContext };

export default BubbleSortContextProvider;
