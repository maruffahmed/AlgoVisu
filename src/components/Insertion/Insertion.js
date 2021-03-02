import React from 'react';
import ItemBars from 'components/Bars/ItemBars';
import Button from 'components/Button';
import { useSortingContext } from 'Context/SortingContext';
import { useInsertionContext } from 'Context/InsertionSortContext';

function Insertion(props) {
  const [insertionSortStepsCount, setInsertionSortStepsCount] = React.useState(0);
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
  const { doInsertionSort, insertionArray, setInsertionArray, insertionBars, setInsertionBars } = useInsertionContext();

  const handleInsertionSort = () => {
    console.log('Insertion sort begin()');
    const countSteps = doInsertionSort(insertionArray);
    setInsertionSortStepsCount(countSteps);
  };
  const handleInsertionBarAmount = (e) => {
    setInsertionBars(e.target.value);
  };
  const handleShuffleArray = () => randomArr(setInsertionArray, insertionBars);

  // React.useEffect(() => {
  //   if (bubbleSortStepsCount === totalCountedSteps) {
  //     setStartAnimation(false);
  //     setTotalCountedSteps(0);
  //   }
  // }, [bubbleSortStepsCount, setStartAnimation, setTotalCountedSteps, totalCountedSteps]);

  React.useEffect(() => {
    randomArr(setInsertionArray, insertionBars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insertionBars]);

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
