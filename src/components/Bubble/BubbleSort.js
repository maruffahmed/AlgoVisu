import React from 'react';
import ItemBars from 'components/Bars/ItemBars';
import { useSortingContext } from 'Context/SortingContext';
import Button from 'components/Button';
import { useBubbleContext } from 'Context/BubbleSortContext';

function BubbleSort(props) {
  const { initialArray, doBubbleSort, randomArr } = useSortingContext();
  const { bubbleArray } = useBubbleContext();
  return (
    <div className="h-screen px-4">
      <ItemBars arr={bubbleArray} />
      <div className="flex justify-center gap-4">
        <Button
          variant="light"
          className="border border-green-500"
          type="button"
          onClick={() => doBubbleSort(bubbleArray)}
        >
          BubbleSort
        </Button>
        <Button onClick={randomArr}>Random array</Button>
      </div>
    </div>
  );
}

export default BubbleSort;
