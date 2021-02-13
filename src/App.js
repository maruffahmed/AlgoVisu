/* eslint-disable no-unused-vars */
import React from 'react';
import { BubbleSortSteps, useBubbleSort } from 'algorithms';
import Bar from 'components/Bar';
import { initialState } from 'algorithms/lib';

function reducer(state, action) {
  switch (action.type) {
    case 'SETNEW':
      return { ...state, arr: action.payload };
    default:
      throw new Error('Unexpted action type');
  }
}

let currentPos = 0;
let timer;
let swapped = [];

function App() {
  const [arr, setArr] = React.useState(initialState);
  const [start, setStart] = React.useState(false);
  const randomArr = () => {
    let newArr = [];
    for (let i = 0; i < 50; i++) {
      newArr.push(randomNum(1, 100));
    }
    setArr(newArr);
  };

  const swap = (left, right) => {
    let newArray = [...arr];
    if (arr[left] > arr[left + 1]) {
      let leftItem = arr[left];
      let rightItem = arr[left + 1];
      arr[left] = rightItem;
      arr[right] = leftItem;
      newArray = [...arr];
    }
    if (currentPos >= arr.length - swapped.length) {
      currentPos = 0;
      swapped.push(right);
      console.log('added to swapped', right);
    } else {
      currentPos++;
    }
    setArr(newArray);
    if (swapped.length === arr.length - 1) {
      currentPos = -2;
      setStart(false);
      stop();
    }
  };

  const bubbleSort = () => {
    swap(currentPos, currentPos + 1);
  };

  function startSort() {
    if (start) {
      timer = setTimeout(bubbleSort, 500);
    }
  }

  function stop() {
    setStart(false);
    clearTimeout(timer);
  }
  startSort();

  const doSort = () => {
    const newArr = [...arr];
    newArr.sort((a, b) => a - b);
    setArr(newArr);
  };

  const renderCol = () => {
    return (
      <div className="bars h-4/5 px-8 py-4">
        <ul className="h-full flex items-end gap-1">
          {arr.map((item, index) => {
            let current = index === currentPos || index === currentPos + 1 ? true : false;
            return <Bar height={item} key={index} />;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="h-screen w-screen px-4">
      {renderCol()}
      <div className="flex items-end gap-1 w-full px-8">
        {arr?.length
          ? arr.map((item, index) => {
              return (
                <p className="w-full text-center text-xs" key={index}>
                  {item}
                </p>
              );
            })
          : null}
      </div>
      <button className="btn" type="button" onClick={() => setStart(true)}>
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
