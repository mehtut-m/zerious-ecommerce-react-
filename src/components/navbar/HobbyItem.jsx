import React from 'react';
import { Link } from 'react-router-dom';

const HobbyItem = ({ title, bsIcon }) => {
  return (
    <div className="hobby-item border-collapse border cursor-pointer transition-colors hover:border-primary hover:text-primary hover:bg-[#212121] w-28 flex flex-col justify-center items-center rounded max-w-[5rem] maw-h-[5rem] h-[80px]">
      {/* <div className="hobby-item  border-collapse border-2 cursor-pointer transition-colors hover:border-primary hover:text-primary hover:bg-[#212121] h-28 w-28 flex flex-col justify-center items-center rounded"> */}
      <div className="flex items-center justify-center">
        <i className={`bi ${bsIcon} text-2xl text-center h-full`}></i>
      </div>
      <p className="text-center text-xs mt-3">{title}</p>
    </div>
  );
};

export default HobbyItem;
