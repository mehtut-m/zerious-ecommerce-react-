const Overlay = ({ handleClose, isOn }) => {
  return (
    <div
      className={`overlay bg-black opacity-70 h-screen w-screen z-50 absolute top-0 right-0 ${
        isOn ? 'block' : 'hidden'
      }`}
      onClick={handleClose}
    ></div>
  );
};

export default Overlay;
