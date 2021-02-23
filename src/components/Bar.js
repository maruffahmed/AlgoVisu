import React from 'react';

function Bar({ height }) {
  return <li className="item-bar bg-green-500 flex-grow" style={{ height: `${height / 100}%` }}></li>;
}

export default Bar;
