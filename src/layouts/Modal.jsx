import { useState } from 'react';
import EditAddressForm from '../components/Address/Modal/EditAddressForm';
import Overlay from '../components/Overlay';

const Modal = ({ modalOn }) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <>
          <Overlay isOn={showModal}>
            <EditAddressForm closeModal={() => setShowModal(false)} />
          </Overlay>
        </>
      )}
    </>
  );
};

export default Modal;
