import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { SortingContextProvider } from 'Context/SortingContext';

ReactDOM.render(
  <React.StrictMode>
    <SortingContextProvider>
      <Router>
        <App />
      </Router>
    </SortingContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
