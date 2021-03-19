import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { SortingContextProvider } from 'Context/SortingContext';
import BubbleSortContextProvider from 'Context/BubbleSortContext';
import InsertionSortContextProvider from 'Context/InsertionSortContext';
import QuickSortContextProvider from 'Context/QuickSortContext';
import MergeSortContextProvider from 'Context/MergeSortContext';

function Wrapper({ children }) {
  return (
    <SortingContextProvider>
      <BubbleSortContextProvider>
        <InsertionSortContextProvider>
          <QuickSortContextProvider>
            <MergeSortContextProvider>
              <Router>
                <HelmetProvider>{children}</HelmetProvider>
              </Router>
            </MergeSortContextProvider>
          </QuickSortContextProvider>
        </InsertionSortContextProvider>
      </BubbleSortContextProvider>
    </SortingContextProvider>
  );
}

export default Wrapper;
