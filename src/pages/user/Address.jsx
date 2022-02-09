import { useContext, useState } from 'react';
import AddressContainer from '../../components/Address/MenuItem/AddressContainer';
import EditAddressForm from '../../components/Address/Modal/EditAddressForm';
import Button from '../../components/Button';
import SectionHeader from '../../components/User/SectionHeader';
import { AuthContext } from '../../contexts/AuthContext';
import Modal from '../../layouts/Modal';

function Address() {
  const {
    user: { address },
  } = useContext(AuthContext);

  const [addressForm, setAddressFormOn] = useState(null);
  const handleInputChange = (e) => {
    setAddressFormOn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="container shadow-md mt-6 rounded-lg border">
      {/* Header */}
      <SectionHeader
        title="Address"
        subtitle="Manage you address and shipping informations"
      />
      {/* Address Body */}
      <div>
        <Button
          text={'Add'}
          className={'max-w-fit ml-auto mt-4'}
          handleClick={() => {
            setAddressFormOn({
              name: '',
              address: '',
              telephoneNo: '',
            });
          }}
        />
      </div>
      <AddressContainer />
      {addressForm && (
        <Modal>
          <EditAddressForm
            addressForm={addressForm}
            closeModal={() => setAddressFormOn(null)}
            handleInputChange={handleInputChange}
          />
        </Modal>
      )}
    </main>
  );
}

export default Address;
