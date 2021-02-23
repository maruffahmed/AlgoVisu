import React from 'react';
import Bar from 'components/Bars/Bar';
function ItemBars({ arr }) {
  return (
    <div className="bars h-4/5 py-4 container mx-auto">
      <ul className="h-full flex items-end gap-1">
        {arr?.length && arr.map((item, index) => <Bar height={item} key={index} />)}
      </ul>
    </div>
  );
}

export default ItemBars;
