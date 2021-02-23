import React from 'react';
import { BubbleSortSteps } from 'algorithms';
import ItemBars from 'components/ItemBars';
import { initialState, randomNum } from 'algorithms/lib';
import { BubbleSortAnimation } from 'algorithmAnimation';

function App() {
  const [initialArray, setInitialArray] = React.useState(initialState); // Unsorted initial array
  // Make a random array
  const randomArr = () => {
    let newArr = [];
    for (let i = 0; i < 100; i++) {
      newArr.push(randomNum(500, 10000));
    }
    setInitialArray(newArr);
  };
  // Buttble sort action
  const doBubbleSort = () => {
    // BubbleSort();
    let bubbleSortSteps = []; // Bubble sort steps array
    for (let step of BubbleSortSteps(initialArray)) {
      bubbleSortSteps.push(step);
    }
    // console.log(bubbleSortSteps);
    BubbleSortAnimation(bubbleSortSteps);
  };

  // Js buildin sort()
  const doSort = () => {
    const newArr = [...initialArray];
    newArr.sort((a, b) => a - b);
    setInitialArray(newArr);
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

export default App;
