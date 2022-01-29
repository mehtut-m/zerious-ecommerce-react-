import React, { useEffect, useLayoutEffect, useState } from 'react';
import Overlay from './Overlay';

const Drawer = ({ drawerOn, children }) => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    setIsOn(drawerOn);
  }, []);

  useLayoutEffect(() => {
    return () => {
      setIsOn(false);
    };
  }, []);

  return (
    <>
      <Overlay isOn={isOn} handleClose={() => setIsOn(false)} />
      <div
        className={`drawer-container bg-white z-50 h-screen absolute top-0 w-[90vw] p-9 pt-0 max-w-[22rem] md:max-w-md right-0 transition-all duration-500 ease-in-out  ${
          !isOn ? 'drawer-off ' : ''
        }
  flex flex-col
  `}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
