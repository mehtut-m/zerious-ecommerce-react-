import React from 'react';
import FormInput from '../../inputs/FormInput';

const EditAddressForm = ({ closeModal }) => {
  return (
    <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
      <form>
        <label htmlFor="">Name</label>
        <input type="text" />
        <FormInput
          title="Name"
          type="text"
          label="Name"
          value=""
          handleChange
        />
        <FormInput
          title="Telephone No."
          type="text"
          label="Telephone No."
          value=""
          handleChange
        />
        <label>Address</label>
        <textarea></textarea>
      </form>
      <div className="md:flex items-center">
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <p className="font-bold">Delete your account</p>
          <p className="text-sm text-gray-700 mt-1">
            You will lose all of your data by deleting your account. This action
            cannot be undone.
          </p>
        </div>
      </div>
      <div className="text-center md:text-right mt-4 md:flex md:justify-end">
        <button className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
          Delete Account
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
