import React from 'react';
import ItemBars from 'components/Bars/ItemBars';
import { useSortingContext } from 'Context/SortingContext';
import Button from 'components/Button';
import { useBubbleContext } from 'Context/BubbleSortContext';

function Bubble(props) {
  const { doBubbleSort, animationSpeed, handleAnimationSpeed, startAnimation } = useSortingContext();
  const { bubbleArray, bubbleBars, setBubbleBars, genRandomBubbleArray } = useBubbleContext();
  const handleBubbleBarAmount = (e) => {
    setBubbleBars(e.target.value);
  };

  React.useEffect(() => {
    genRandomBubbleArray(bubbleBars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bubbleBars]);

  return (
    <div className="h-screen px-4 pt-16">
      <ItemBars arr={bubbleArray} />
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-8">
          <div className="flex gap-4 items-center">
            <p className="text-base">Speed : </p>
            <select value={animationSpeed} onChange={handleAnimationSpeed} disabled={startAnimation}>
              <option value="10">Fast</option>
              <option value="100">Medium</option>
              <option value="500">Slow</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <p>Total Bars : </p>
            <select value={bubbleBars} onChange={handleBubbleBarAmount} disabled={startAnimation}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>

        <Button
          variant="light"
          className="border border-green-500"
          type="button"
          onClick={() => doBubbleSort(bubbleArray)}
          disabled={startAnimation}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default Bubble;
