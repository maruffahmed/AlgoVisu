import React from 'react';
import ItemBars from 'components/Bars/ItemBars';
import { useSortingContext } from 'Context/SortingContext';

function BubbleSort(props) {
  const { initialArray, doBubbleSort, doSort, randomArr } = useSortingContext();
  console.log(initialArray);
  return (
    <div className="h-screen px-4">
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

export default BubbleSort;
