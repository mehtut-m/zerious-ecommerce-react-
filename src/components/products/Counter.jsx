import React, { useState } from 'react';

const Counter = ({ itemCount, handleClick }) => {
  const { addCount, removeCount, updateCount } = handleClick;

  const handleClickAdd = () => {
    addCount();
  };
  const handleClickSubtract = () => {
    removeCount();
  };
  const handleChange = (e) => {
    //
  };

  return (
    <div className="counter-container flex h-8 text-base">
      <button className="border w-6" onClick={handleClickSubtract}>
        -
      </button>
      <input
        type="number"
        className="product-count w-12 p-2 border text-center rounded-none"
        value={itemCount}
        min="1"
        disabled
        // onChange={(e) => setCurrentCount(e.target.value)}
      />

      <button className="border w-6 " onClick={handleClickAdd}>
        +
      </button>
    </div>
  );
};

export default Counter;
