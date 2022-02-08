const Overlay = ({ handleClose, isOn, children }) => {
  return (
    <div
      className={`overlay bg-black h-screen w-screen z-50 fixed top-0 right-0 transition-all duration-200 ease-in-out ${
        // isOn ? 'opacity-70' : 'opacity-0 invisible'
        isOn ? 'bg-[rgba(0,0,0,0.7)]' : 'opacity-0 invisible'
      } flex justify-center items-center`}
      onClick={handleClose}
    >
      {children}
    </div>
  );
};

export default Overlay;
