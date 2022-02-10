import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { updateAddress } from '../../../api/user';
import FormInput from '../../inputs/FormInput';

const EditAddressForm = ({
  closeModal,
  handleInputChange,
  addressForm,
  action,
}) => {
  const { name, telephoneNo, address } = addressForm;
  const { createNewAddress, user } = useContext(AuthContext);
  console.log(user);
  const handleFormChange = (e) => {
    handleInputChange(e);
  };

  const handleCreateAddress = async () => {
    try {
      const res = await createNewAddress(name, telephoneNo, address);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateAddress = async () => {
    try {
      // const res = await createAddress({ name, telephoneNo, address });
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
      <form>
        <FormInput
          title="name"
          type="text"
          label="Name"
          value={name}
          handleChange={handleFormChange}
        />
        <FormInput
          title="telephoneNo"
          type="text"
          label="Telephone No."
          value={telephoneNo}
          handleChange={handleFormChange}
        />
        <label>Address</label>
        <textarea
          name="address"
          onChange={handleFormChange}
          value={address}
        ></textarea>
      </form>

      <div className="text-center md:text-right mt-4 md:flex md:justify-end">
        <button
          className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
          onClick={
            action === 'CREATE'
              ? handleCreateAddress
              : action === 'EDIT'
              ? handleUpdateAddress
              : () => {}
          }
        >
          Save
        </button>
        <button
          className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
md:mt-0 md:order-1"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditAddressForm;
