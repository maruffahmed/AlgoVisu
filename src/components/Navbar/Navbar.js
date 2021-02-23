import React from 'react';

function Navbar(props) {
  return (
    <nav className="max-h-24 bg-gray-100 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="brand-logo">
            <h1 className="text-2xl text-gray-600 font-semibold">AlgoVisu</h1>
          </div>

          <ul className="flex gap-4">
            <li>
              <p className="text-gray-900">Sort :</p>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-500">
                Bubble
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-500">
                Insertion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
