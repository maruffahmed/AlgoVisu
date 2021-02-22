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
    let domBar = document.getElementsByClassName('item-bar');
    for (let i = 0; i < sortedArr.length; i++) {
      let isColor = i % 3 !== 0;
      if (!isColor) {
        let [firstBar, secondBar] = sortedArr[i];
        let firstBarStyle = domBar[firstBar].style;
        let secondBarStyle = domBar[secondBar].style;
        // let color = i % 3 !== 0 ? 'red' : 'rgba(16, 185, 129, var(--tw-bg-opacity))';
        let color = 'red';
        setTimeout(() => {
          firstBarStyle.backgroundColor = color;
          secondBarStyle.backgroundColor = color;
        }, i * 0);
      } else {
        setTimeout(() => {
          let [selectedBar, selectedBarHeight] = sortedArr[i];
          let selectedBarStyle = domBar[selectedBar].style;
          selectedBarStyle.height = `${selectedBarHeight / 100}%`;
          let color = i % 3 !== 1 ? 'red' : 'rgba(16, 185, 129, var(--tw-bg-opacity))';
          selectedBarStyle.backgroundColor = color;
        }, i * 0);
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
