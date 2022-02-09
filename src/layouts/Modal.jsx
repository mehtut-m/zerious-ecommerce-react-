import { useState } from 'react';
import EditAddressForm from '../components/Address/Modal/EditAddressForm';
import Overlay from '../components/Overlay';

const Modal = ({ modalOn, children }) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <>
          <Overlay isOn={showModal}>{children}</Overlay>
        </>
      )}
    </>
  );
};

export default Modal;
