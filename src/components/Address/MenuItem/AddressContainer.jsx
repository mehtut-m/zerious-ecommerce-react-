import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AddressItem from './AddressItem';

const AddressContainer = () => {
  const {
    user: { user },
  } = useContext(AuthContext);
  const address = user?.address;

  return (
    <>
      {address && address?.length !== 0 ? (
        <div className="address-container flex flex-col p-6">
          {address.map((item) => (
            <AddressItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="address-container flex p-6 justify-center">
          <p>You don't have any address yet try to add one.</p>
        </div>
      )}
    </>
  );
};

export default AddressContainer;
