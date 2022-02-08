import { useContext } from 'react';
import AddressContainer from '../../components/Address/MenuItem/AddressContainer';
import Button from '../../components/Button';
import SectionHeader from '../../components/User/SectionHeader';
import { AuthContext } from '../../contexts/AuthContext';
import Modal from '../../layouts/Modal';

function Address() {
  const {
    user: { address },
  } = useContext(AuthContext);

  return (
    <main className="container shadow-md mt-6 rounded-lg border">
      {/* Header */}
      <SectionHeader
        title="Address"
        subtitle="Manage you address and shipping informations"
      />
      {/* Address Body */}
      <div>
        <Button text={'Add'} className={'max-w-fit ml-auto mt-4'} />
      </div>
      <AddressContainer />
      <Modal />
    </main>
  );
}

export default Address;
