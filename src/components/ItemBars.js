import React from 'react';
import Bar from 'components/Bar';
function ItemBars({ arr }) {
  return (
    <div className="bars h-4/5 px-8 py-4">
      <ul className="h-full flex items-end gap-1">
        {arr?.length && arr.map((item, index) => <Bar height={item} key={index} />)}
      </ul>
    </div>
  );
}

export default ItemBars;
