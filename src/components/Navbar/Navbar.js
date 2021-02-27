import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="max-h-24 bg-gray-100 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="brand-logo">
            <Link to="/" className="text-2xl text-gray-600 font-semibold">
              AlgoVisu
            </Link>
          </div>

          <ul className="nav-links flex gap-4">
            <li>
              <p className="text-gray-900">Sort :</p>
            </li>
            <li>
              <NavLink to="/bubble" className="text-gray-700 hover:text-gray-500">
                Bubble
              </NavLink>
            </li>
            <li>
              <NavLink to="/insertion" className="text-gray-700 hover:text-gray-500">
                Insertion
              </NavLink>
            </li>
            <li>
              <NavLink to="/quick" className="text-gray-700 hover:text-gray-500">
                Quick
              </NavLink>
            </li>
            <li>
              <NavLink to="/merge" className="text-gray-700 hover:text-gray-500">
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
