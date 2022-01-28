import React, { useState } from 'react';

const Counter = ({ itemCount, handleClick }) => {
  const { addCount, removeCount, updateCount } = handleClick;

  const handleClickAdd = () => {
    addCount();
  };
  const handleClickSubtract = () => {
    removeCount();
  };

  return (
    <div className="counter-container flex">
      <button className="border-2 w-6 h-12" onClick={handleClickSubtract}>
        -
      </button>
      <input
        type="number"
        className="product-count w-12 p-2 text-center h-12 rounded-none"
        value={itemCount}
        min="1"
        onChange={(e) => updateCount(e.target.value)}
      />

      <button className="border-2 w-6 h-12" onClick={handleClickAdd}>
        +
      </button>
    </div>
  );
};

export default Counter;
