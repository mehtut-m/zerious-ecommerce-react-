import React from 'react';

const AddressSelection = () => {
  return (
    <div className="address-item border border-[#9A9494] py-2 px-3 rounded-xl mb-8">
      <div className="address-item-header flex justify-between mb-2">
        <h6>Ship to</h6>
        <button className="text-black">Change</button>
      </div>

      <div className="address-item-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        facilisis mattis vehicula.
      </div>
    </div>
  );
};

export default AddressSelection;
