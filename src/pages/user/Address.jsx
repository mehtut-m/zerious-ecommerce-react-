import AddressContainer from '../../components/Address/MenuItem/AddressContainer';
import Button from '../../components/Button';
import SectionHeader from '../../components/SectionHeader';

function Address() {
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
    </main>
  );
}

export default Address;
