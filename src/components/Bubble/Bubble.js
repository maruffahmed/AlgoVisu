import React from 'react';
import ItemBars from 'components/Bars/ItemBars';
import { useSortingContext } from 'Context/SortingContext';
import Button from 'components/Button';
import { useBubbleContext } from 'Context/BubbleSortContext';

function Bubble(props) {
  const { doBubbleSort, animationSpeed, handleAnimationSpeed } = useSortingContext();
  const { bubbleArray } = useBubbleContext();

  return (
    <div className="h-screen px-4 pt-16">
      <ItemBars arr={bubbleArray} />
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4 items-center">
          <p className="text-base">Speed : </p>
          <select value={animationSpeed} onChange={handleAnimationSpeed}>
            <option value="10">Fast</option>
            <option value="100">Medium</option>
            <option value="200">Slow</option>
          </select>
        </div>

        <Button
          variant="light"
          className="border border-green-500"
          type="button"
          onClick={() => doBubbleSort(bubbleArray)}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default Bubble;
