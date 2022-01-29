import React from 'react';

const Drawer = ({ drawerOn, children }) => {
  return (
    <div
      className={`drawer-container bg-white z-50 h-screen absolute top-0 w-[90vw] p-9 pt-0 max-w-[22rem] md:max-w-md right-0 transition-all duration-500 ease-in-out  ${
        !drawerOn ? 'drawer-off ' : ''
      }
  flex flex-col
  `}
    >
      {children}
    </div>
  );
};

export default Drawer;
