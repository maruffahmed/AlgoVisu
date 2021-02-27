import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSortingContext } from 'Context/SortingContext';

function Navbar(props) {
  const { startAnimation } = useSortingContext();
  const handleLinkClick = (e) => {
    startAnimation && e.preventDefault();
  };

  return (
    <nav className="max-h-24 bg-gray-100 py-4 fixed top-0 w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="brand-logo">
            <Link to="/" className="text-2xl text-gray-600 font-semibold" onClick={handleLinkClick}>
              AlgoVisu
            </Link>
          </div>

          <ul className="nav-links flex gap-4">
            <li>
              <p className="text-gray-900">Sort :</p>
            </li>
            <li>
              <NavLink to="/bubble" className="text-gray-700 hover:text-gray-500" onClick={handleLinkClick}>
                Bubble
              </NavLink>
            </li>
            <li>
              <NavLink to="/insertion" className="text-gray-700 hover:text-gray-500" onClick={handleLinkClick}>
                Insertion
              </NavLink>
            </li>
            <li>
              <NavLink to="/quick" className="text-gray-700 hover:text-gray-500" onClick={handleLinkClick}>
                Quick
              </NavLink>
            </li>
            <li>
              <NavLink to="/merge" className="text-gray-700 hover:text-gray-500" onClick={handleLinkClick}>
                Merge
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
