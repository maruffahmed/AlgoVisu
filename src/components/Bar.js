import React from 'react';

function Bar({ height }) {
  return <li className="bg-green-500 flex-grow" style={{ height: `${height}%` }}></li>;
}

export default Bar;
