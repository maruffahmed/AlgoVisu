/* eslint-disable no-unused-vars */
import React from 'react';
import { BubbleSort, BubbleSortSteps } from 'algorithms';
import ItemBars from 'components/ItemBars';
import { initialValue } from 'algorithms/lib';

function App() {
  const [arr, setArr] = React.useState(initialValue);

  const randomArr = () => {
    let newArr = [];
    for (let i = 0; i < 100; i++) {
      newArr.push(randomNum(500, 10000));
    }
    setArr(newArr);
  };
  const doBubbleSort = () => {};

  const doSort = () => {
    const newArr = [...arr];
    newArr.sort((a, b) => a - b);
    setArr(newArr);
  };
  return (
    <div className="h-screen w-screen px-4">
      <ItemBars arr={arr} />
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
