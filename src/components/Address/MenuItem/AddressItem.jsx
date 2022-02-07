import AddressItemInfo from './AddressItemInfo';

const AddressItem = ({ item }) => {
  const { name, telephoneNo, address } = item;
  return (
    <div className="border-b py-4 ">
      <AddressItemInfo label={'ชื่อ นามสกุล'} content={name} />
      <AddressItemInfo label={'โทรศัพท์'} content={telephoneNo} />
      <AddressItemInfo label={'ที่อยู่'} content={address} />
    </div>
  );
};

export default AddressItem;
