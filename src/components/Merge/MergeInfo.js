import React from 'react';

function MergeInfo(props) {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold text-gray-800">About Merge Sort</h1>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <div className="sm:w-1/2">
          <p className="text-gray-700 leading-7">
            In computer science, merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most
            implementations produce a stable sort, which means that the order of equal elements is the same in the input
            and output. Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.{' '}
            <a href="https://en.wikipedia.org/wiki/Merge_sort" target="blank" className="text-green-600 font-semibold">
              Wikipedia
            </a>
          </p>
        </div>

        <div className="sm:w-1/2">
          <ul>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Worst complexity:</span> n*log(n)
              </p>
            </li>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Average complexity:</span> n*log(n)
              </p>
            </li>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Best complexity:</span> n*log(n)
              </p>
            </li>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Space complexity:</span> n
              </p>
            </li>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Method:</span> Merging
              </p>
            </li>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Stable:</span> Yes
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MergeInfo;
