import AddressItemInfo from './AddressItemInfo';

const AddressItem = ({ item }) => {
  const { name, telephoneNo, address } = item;
  return (
    <div className="border-b py-4 ">
      <div className="flex justify-between">
        <AddressItemInfo label={'Name'} content={name} />
        <div className="">
          <button className="text-xs underline hover:text-primary">Edit</button>
          <button className="text-xs underline hover:text-primary ml-3">
            Delete
          </button>
        </div>
      </div>
      <AddressItemInfo label={'Telephone No'} content={telephoneNo} />
      <AddressItemInfo label={'Address'} content={address} />
    </div>
  );
};

export default AddressItem;
