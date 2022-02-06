const Overlay = ({ handleClose, isOn }) => {
  return (
    <div
      className={`overlay bg-black h-screen w-screen z-50 fixed top-0 right-0 transition-all duration-200 ease-in-out ${
        isOn ? 'opacity-70' : 'opacity-0 invisible'
      }`}
      onClick={handleClose}
    ></div>
  );
};

export default Overlay;
