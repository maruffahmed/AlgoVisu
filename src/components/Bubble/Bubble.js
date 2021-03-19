import React from 'react';
import { Helmet } from 'react-helmet';
import ItemBars from 'components/Bars/ItemBars';
import { useSortingContext } from 'Context/SortingContext';
import Button from 'components/Button';
import { useBubbleContext } from 'Context/BubbleSortContext';

function Bubble(props) {
  const [bubbleSortStepsCount, setBubbleSortStepsCount] = React.useState(0);
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
  const { doBubbleSort, bubbleArray, setBubbleArray, bubbleBars, setBubbleBars } = useBubbleContext();
  const handleBubbleBarAmount = (e) => {
    setBubbleBars(e.target.value);
  };
  const handleBubbleSort = () => {
    setIsSorted(true);
    const countSteps = doBubbleSort(bubbleArray);
    setBubbleSortStepsCount(countSteps);
  };
  const handleShuffleArray = () => {
    randomArr(setBubbleArray, bubbleBars);
    setIsSorted(false);
  };

  React.useEffect(() => {
    if (bubbleSortStepsCount === totalCountedSteps) {
      setStartAnimation(false);
      setTotalCountedSteps(0);
    }
  }, [bubbleSortStepsCount, setStartAnimation, setTotalCountedSteps, totalCountedSteps]);

  React.useEffect(() => {
    randomArr(setBubbleArray, bubbleBars);
    setIsSorted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bubbleBars]);

  return (
    <div className="h-screen px-4 pt-24 md:pt-20">
      <Helmet>
        <title>Bubble Sort</title>
      </Helmet>
      <p className="text-center text-xl">Bubble Sort</p>
      <ItemBars arr={bubbleArray} />
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
            <select value={bubbleBars} onChange={handleBubbleBarAmount} disabled={startAnimation}>
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
            onClick={handleBubbleSort}
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
    </div>
  );
}

export default Bubble;
