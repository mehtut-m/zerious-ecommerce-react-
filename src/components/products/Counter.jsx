import React, { useState } from 'react';

const Counter = ({ itemCount, handleClick }) => {
  const { addCount, removeCount } = handleClick;
  const handleClickAdd = () => {
    addCount();
  };
  const handleClickSubtract = () => {
    removeCount();
  };

  return (
    <div className="counter-container">
      <button className="border-2 w-6 h-12" onClick={handleClickSubtract}>
        -
      </button>
      <span className="product-count p-3">{itemCount}</span>
      <button className="border-2 w-6 h-12" onClick={handleClickAdd}>
        +
      </button>
    </div>
  );
};

export default Counter;
