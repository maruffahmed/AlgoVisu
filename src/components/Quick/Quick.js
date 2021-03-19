import React from 'react';
import { Helmet } from 'react-helmet-async';
import ItemBars from 'components/Bars/ItemBars';
import Button from 'components/Button';
import { useSortingContext } from 'Context/SortingContext';
import { useQuickContext } from 'Context/QuickSortContext';
import QuickInfo from './QuickInfo';

function Quick() {
  const [quickSortStepsCount, setQuickSortStepsCount] = React.useState(0);
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

  const { doQuickSort, quickArray, setQuickArray, quickBars, setQuickBars } = useQuickContext();

  const handleQuickSort = () => {
    setIsSorted(true);
    const countSteps = doQuickSort(quickArray);
    setQuickSortStepsCount(countSteps);
  };
  const handleQuickBarAmount = (e) => {
    setQuickBars(e.target.value);
  };
  const handleShuffleArray = () => {
    randomArr(setQuickArray, quickBars);
    setIsSorted(false);
  };

  React.useEffect(() => {
    if (quickSortStepsCount === totalCountedSteps) {
      setStartAnimation(false);
      setTotalCountedSteps(0);
    }
  }, [quickSortStepsCount, setStartAnimation, setTotalCountedSteps, totalCountedSteps]);

  React.useEffect(() => {
    randomArr(setQuickArray, quickBars);
    setIsSorted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quickBars]);

  return (
    <div className="h-screen px-4 pt-24 md:pt-20">
      <Helmet>
        <title>Quick Sort</title>
      </Helmet>
      <p className="text-center text-xl">Quick Sort</p>
      <ItemBars arr={quickArray} />
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
            <select value={quickBars} onChange={handleQuickBarAmount} disabled={startAnimation}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="70">70</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 md:gap-8">
          <Button
            variant="light"
            className="border border-green-500"
            type="button"
            onClick={handleQuickSort}
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
      <QuickInfo />
    </div>
  );
}

export default Quick;
