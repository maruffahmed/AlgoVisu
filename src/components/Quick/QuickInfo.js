import React from 'react';

function QuickInfo(props) {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold text-gray-800">About Quick Sort</h1>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <div className="sm:w-1/2">
          <p className="text-gray-700 leading-7">
            Quicksort is an efficient sorting algorithm. Developed by British computer scientist Tony Hoare in 1959 and
            published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be
            somewhat faster than merge sort and about two or three times faster than heapsort.{' '}
            <a href="https://en.wikipedia.org/wiki/Quicksort" target="blank" className="text-green-600 font-semibold">
              Wikipedia
            </a>
          </p>
        </div>

        <div className="sm:w-1/2">
          <ul>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Worst complexity:</span> n^2
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
                <span className="font-semibold">Method:</span> Partitioning
              </p>
            </li>
            <li className="mb-2">
              <p className="text-gray-700">
                <span className="font-semibold">Stable:</span> No
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QuickInfo;
