import React from 'react';

const AddressItem = ({ label, content }) => {
  return (
    <div className="flex mb-2">
      <span
        className={`mr-4 text-right flex-grow-1 hidden w-40 md:block min-w-max text-secondary-typography`}
      >
        {`${label} :`}
      </span>
      <span className={`${label === 'Name' && 'font-medium'}`}>{content}</span>
    </div>
  );
};

export default AddressItem;
