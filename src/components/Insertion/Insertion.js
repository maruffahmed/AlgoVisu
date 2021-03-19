import React from 'react';
import { Helmet } from 'react-helmet-async';
import ItemBars from 'components/Bars/ItemBars';
import Button from 'components/Button';
import { useSortingContext } from 'Context/SortingContext';
import { useInsertionContext } from 'Context/InsertionSortContext';
import InsertionInfo from './InsertionInfo';

function Insertion(props) {
  const [insertionSortStepsCount, setInsertionSortStepsCount] = React.useState(0);
  const {
    isSorted,
    setIsSorted,
    animationSpeed,
    handleAnimationSpeed,
    startAnimation,
    setStartAnimation,
    totalCountedSteps,
    setTotalCountedSteps,
    randomArr,
  } = useSortingContext();
  const { doInsertionSort, insertionArray, setInsertionArray, insertionBars, setInsertionBars } = useInsertionContext();

  const handleInsertionSort = () => {
    setIsSorted(true);
    const countSteps = doInsertionSort(insertionArray);
    setInsertionSortStepsCount(countSteps);
  };
  const handleInsertionBarAmount = (e) => {
    setInsertionBars(e.target.value);
  };
  const handleShuffleArray = () => {
    randomArr(setInsertionArray, insertionBars);
    setIsSorted(false);
  };

  React.useEffect(() => {
    if (insertionSortStepsCount === totalCountedSteps) {
      setStartAnimation(false);
      setTotalCountedSteps(0);
    }
  }, [insertionSortStepsCount, setStartAnimation, setTotalCountedSteps, totalCountedSteps]);

  React.useEffect(() => {
    randomArr(setInsertionArray, insertionBars);
    setIsSorted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insertionBars]);

  return (
    <div className="h-screen px-4 pt-24 md:pt-20">
      <Helmet>
        <title>Insertion Sort</title>
      </Helmet>
      <p className="text-center text-xl">Insertion Sort</p>
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
            disabled={startAnimation || isSorted}
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
      <InsertionInfo />
    </div>
  );
}

export default Insertion;
