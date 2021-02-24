import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SortingContextProvider } from 'Context/SortingContext';
import BubbleSortContextProvider from 'Context/BubbleSortContext';

function Wrapper({ children }) {
  return (
    <SortingContextProvider>
      <BubbleSortContextProvider>
        <Router>{children}</Router>
      </BubbleSortContextProvider>
    </SortingContextProvider>
  );
}

export default Wrapper;
