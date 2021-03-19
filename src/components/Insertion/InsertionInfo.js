import React from 'react';

function InsertionInfo(props) {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold text-gray-800">About Insertion Sort</h1>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <div className="sm:w-1/2">
          <p className="text-gray-700 leading-7">
            Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is
            much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.{' '}
            <a
              href="https://en.wikipedia.org/wiki/Insertion_sort"
              target="blank"
              className="text-green-600 font-semibold"
            >
              Wikipedia
            </a>
          </p>
        </div>

        <div className="sm:w-1/2">
          <ul>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Worst complexity:</span> n<sup>2</sup>
              </p>
            </li>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Average complexity:</span> n<sup>2</sup>
              </p>
            </li>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Best complexity:</span> n
              </p>
            </li>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Space complexity:</span> 1
              </p>
            </li>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Method:</span> Insertion
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

export default InsertionInfo;
