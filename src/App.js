/* eslint-disable no-unused-vars */
import React from 'react';
import { BubbleSortSteps, useBubbleSort } from 'algorithms';
import ItemBars from 'components/ItemBars';
import { initialState } from 'algorithms/lib';

// Reducer function for state change action
function reducer(state, action) {
  switch (action.type) {
    case 'SETNEW':
      return { ...state, arr: action.payload };
    default:
      throw new Error('Unexpted action type');
  }
}

function App() {
  const [{ arr: initialArray }, dispatch] = React.useReducer(reducer, initialState); // Unsorted initial array
  // const BubbleSort = useBubbleSort(initialArray, dispatch);
  // Make a random array
  const randomArr = () => {
    let newArr = [];
    for (let i = 0; i < 100; i++) {
      newArr.push(randomNum(500, 10000));
    }
    dispatch({ type: 'SETNEW', payload: newArr });
  };
  // Buttble sort action
  const doBubbleSort = () => {
    // BubbleSort();
    let bubbleSortSteps = [];
    for (let step of BubbleSortSteps(initialArray)) {
      bubbleSortSteps.push(step);
    }
    console.log(bubbleSortSteps);
    doAnimation(bubbleSortSteps);
  };

  const doAnimation = (sortedArr) => {
    for (let i = 0; i < sortedArr.length; i++) {
      const domBar = document.getElementsByClassName('item-bar');
      const isColor = i % 3 !== 2;
      if (isColor) {
        const [firstBar, secondBar] = sortedArr[i];
        const firstBarStyle = domBar[firstBar].style;
        const secondBarStyle = domBar[secondBar].style;
        const color = i % 3 === 0 ? 'red' : 'rgba(16, 185, 129, var(--tw-bg-opacity))';
        setTimeout(() => {
          firstBarStyle.backgroundColor = color;
          secondBarStyle.backgroundColor = color;
        }, i * 5);
      } else {
        setTimeout(() => {
          const [selectedBar, selectedBarHeight] = sortedArr[i];
          const selectedBarStyle = domBar[selectedBar].style;
          selectedBarStyle.height = `${selectedBarHeight}%`;
        }, i * 5);
      }
    }
  };

  // Js buildin sort()
  const doSort = () => {
    const newArr = [...initialArray];
    newArr.sort((a, b) => a - b);
    dispatch({ type: 'SETNEW', payload: newArr });
  };
  return (
    <div className="h-screen w-screen px-4">
      <ItemBars arr={initialArray} />
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
// Get a random number between minimum and maximum number
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default App;
