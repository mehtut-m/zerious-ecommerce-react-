import React from 'react';

const AddressItem = ({ label, content }) => {
  return (
    <div className="flex">
      <span className="mr-4 text-right flex-grow-1">{label}</span>
      <span className="flex-grow-[3]">{content}</span>
    </div>
  );
};

export default AddressItem;
