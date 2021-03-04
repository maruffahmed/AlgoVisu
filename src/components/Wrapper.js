import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SortingContextProvider } from 'Context/SortingContext';
import BubbleSortContextProvider from 'Context/BubbleSortContext';
import InsertionSortContextProvider from 'Context/InsertionSortContext';
import QuickSortContextProvider from 'Context/QuickSortContext';

function Wrapper({ children }) {
  return (
    <SortingContextProvider>
      <BubbleSortContextProvider>
        <InsertionSortContextProvider>
          <QuickSortContextProvider>
            <Router>{children}</Router>
          </QuickSortContextProvider>
        </InsertionSortContextProvider>
      </BubbleSortContextProvider>
    </SortingContextProvider>
  );
}

export default Wrapper;
