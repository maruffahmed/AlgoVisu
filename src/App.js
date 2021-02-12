/* eslint-disable no-unused-vars */
import React from 'react';
import { BubbleSortSteps, useBubbleSort } from 'algorithms';
import ItemBars from 'components/ItemBars';
import { initialState } from 'algorithms/lib';

function reducer(state, action) {
  switch (action.type) {
    case 'SETNEW':
      return { ...state, arr: action.payload };
    default:
      throw new Error('Unexpted action type');
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const BubbleSort = useBubbleSort(state.arr, dispatch);
  const randomArr = () => {
    let newArr = [];
    for (let i = 0; i < 100; i++) {
      newArr.push(randomNum(500, 10000));
    }
    dispatch({ type: 'SETNEW', payload: newArr });
  };
  const doBubbleSort = () => {
    BubbleSort();
  };

  const doSort = () => {
    const newArr = [...state.arr];
    newArr.sort((a, b) => a - b);
    dispatch({ type: 'SETNEW', payload: newArr });
  };
  return (
    <div className="h-screen w-screen px-4">
      <ItemBars arr={state.arr} />
      <button className="btn" type="button" onClick={doBubbleSort}>
        BubbleSort
      </button>
      <button className="btn" onClick={doSort}>
        Sort()
      </button>
      <button className="btn" onClick={randomArr}>
        Random array
      </button>
    </div>
  );
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default App;
