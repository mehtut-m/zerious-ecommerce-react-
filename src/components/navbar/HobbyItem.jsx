import React from 'react';

const HobbyItem = ({ title, bsIcon }) => {
  return (
    <div className="hobby-item group border-collapse border cursor-pointer transition-all ease-in-out duration-300 hover:border-primary hover:text-primary hover:bg-[#212121] w-full flex flex-col justify-center items-center rounded maw-h-[5rem] h-[80px] p-10 md:[max-w-unset] md:w-[7rem] md:h-[7rem]">
      <div className="flex items-center justify-center group-hover:mt-[-1.25rem]">
        <i
          className={`bi ${bsIcon} text-2xl text-center h-full group-hover:text-3xl`}
        ></i>
      </div>
      <p className="text-center text-xs mt-3">{title}</p>
    </div>
  );
};

export default HobbyItem;
