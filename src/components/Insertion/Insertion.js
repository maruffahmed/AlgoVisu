import React from 'react';
import ItemBars from 'components/Bars/ItemBars';
import Button from 'components/Button';
import { useSortingContext } from 'Context/SortingContext';

function Insertion(props) {
  const insertionArray = [5252, 9274, 2983, 9238, 3267, 4359, 7612, 4387, 2723, 3498, 6328, 7999, 1982, 3974, 6922];
  const {
    animationSpeed,
    handleAnimationSpeed,
    startAnimation,
    // eslint-disable-next-line no-unused-vars
    setStartAnimation,
    // eslint-disable-next-line no-unused-vars
    totalCountedSteps,
    // eslint-disable-next-line no-unused-vars
    setTotalCountedSteps,
    randomArr,
  } = useSortingContext();

  let insertionBars = 15;
  const setInsertionBars = (arr) => (insertionBars = arr);

  const handleInsertionSort = () => {
    console.log('Insertion sort begin()');
  };
  const handleInsertionBarAmount = () => {
    console.log('Handle insertion bar amount');
  };
  const handleShuffleArray = () => randomArr(setInsertionBars, insertionBars);
  return (
    <div className="h-screen px-4 pt-24 md:pt-20">
      <ItemBars arr={insertionArray} />
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
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
            <select value={insertionBars} onChange={handleInsertionBarAmount} disabled={startAnimation}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 md:gap-8">
          <Button
            variant="light"
            className="border border-green-500"
            type="button"
            onClick={handleInsertionSort}
            disabled={startAnimation}
          >
            Start
          </Button>
          <Button
            variant="light"
            className="border border-green-500"
            type="button"
            onClick={handleShuffleArray}
            disabled={startAnimation}
          >
            Shuffle
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Insertion;
