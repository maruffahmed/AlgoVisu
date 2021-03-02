import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SortingContextProvider } from 'Context/SortingContext';
import BubbleSortContextProvider from 'Context/BubbleSortContext';
import InsertionSortContextProvider from 'Context/InsertionSortContext';

function Wrapper({ children }) {
  return (
    <SortingContextProvider>
      <BubbleSortContextProvider>
        <InsertionSortContextProvider>
          <Router>{children}</Router>
        </InsertionSortContextProvider>
      </BubbleSortContextProvider>
    </SortingContextProvider>
  );
}

export default Wrapper;
