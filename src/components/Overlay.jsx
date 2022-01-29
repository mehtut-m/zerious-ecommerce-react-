import { useState } from 'react';

const Overlay = () => {
  const [overlayOff, setOverlayOff] = useState(true);
  return (
    <div
      className={`overlay bg-black opacity-70 h-screen w-screen z-50 absolute top-0 right-0 ${
        overlayOff ? 'none' : 'block'
      }`}
      onClick={() => setOverlayOff(true)}
    ></div>
  );
};

export default Overlay;
