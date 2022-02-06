import React, { useEffect, useState } from 'react';

const AddressSelection = ({
  address,
  selectedAddressIdx,
  setSelectedAddressIdx,
}) => {
  const [addresses, setAddresses] = useState([]);
  const [selectAddress, setSelectAddress] = useState(false);

  const addressOption = addresses.map((item, index) => {
    return (
      <div key={item.id} className="flex mb-2">
        <input
          name="address"
          type="radio"
          className=""
          value={index}
          id={item.id}
          defaultChecked={index === selectedAddressIdx}
          onChange={(e) => {
            setSelectedAddressIdx(e.target.value);
          }}
        />
        <label className="ml-3" htmlFor={item.id}>
          {item.name} {item.telephoneNo} {item.address}
        </label>
      </div>
    );
  });

  const handleClick = () => {
    if (selectAddress) {
      return setSelectAddress(false);
    }

    return setSelectAddress(true);
  };

  useEffect(() => {
    if (address) {
      setAddresses(address);
    }
  }, [address]);

  return (
    <div className="address-item border border-[#9A9494] py-4 px-5 rounded-xl mb-8">
      <div className="address-item-header flex justify-between mb-2 font-semibold">
        <h6 className="">Ship to</h6>
        <button
          className="text-black font-semibold hover:text-primary"
          onClick={handleClick}
        >
          {selectAddress ? 'Done' : `Change`}
        </button>
      </div>

      <div className="address-item-body">
        <p>
          {addresses.length > 0 &&
            !selectAddress &&
            `${addresses[selectedAddressIdx].name} ${addresses[selectedAddressIdx].telephoneNo} ${addresses[selectedAddressIdx].address}`}
        </p>
        {selectAddress && addressOption}
      </div>
    </div>
  );
};

export default AddressSelection;
