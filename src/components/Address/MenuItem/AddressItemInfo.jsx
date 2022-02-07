import React from 'react';

const AddressItem = ({ label, content }) => {
  return (
    <div className="flex">
      <span
        className={`mr-4 text-right flex-grow-1 hidden md:block min-w-max text-secondary-typography`}
      >
        {label}
      </span>
      <span
        className={`flex-grow-[3]  ${
          label === 'ชื่อ นามสกุล' && 'font-semibold'
        }`}
      >
        {content}
      </span>
    </div>
  );
};

export default AddressItem;
