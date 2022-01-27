import React from 'react';
import { Link } from 'react-router-dom';

const HobbyItem = ({ title, bsIcon }) => {
  return (
    <div className="hobby-item  border-collapse border-2 cursor-pointer transition-colors hover:border-primary h-28 w-28 flex flex-col justify-center items-center rounded">
      <div className="flex items-center justify-center ">
        <i className={`bi ${bsIcon} text-4xl`}></i>
      </div>
      <p className="text-center text-sm mt-3">{title}</p>
    </div>
  );
};

export default HobbyItem;
