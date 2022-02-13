import React from 'react';

const HobbyItem = ({ title, bsIcon }) => {
  return (
    <div className="hobby-item group border-collapse border cursor-pointer transition-all ease-in-out duration-300 hover:border-primary hover:text-primary hover:bg-[#212121] w-full flex flex-col justify-center items-center rounded maw-h-[5rem] h-[80px] p-2 md:[max-w-unset] md:w-[7rem] md:h-[7rem]">
      <div className="flex items-center justify-center transition-transform	 ease-in-out duration-300 group-hover:-translate-y-2 group-hover:relative group-hover:text-3xl">
        <i className={`bi ${bsIcon} text-[1.75rem] text-center h-full`}></i>
      </div>
      <p className="text-center text-xs mt-1">{title}</p>
    </div>
  );
};

export default HobbyItem;
