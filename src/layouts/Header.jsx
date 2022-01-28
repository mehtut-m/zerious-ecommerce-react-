import React from 'react';
import Navbar from '../components/navbar/Navbar';

import { useLocation } from 'react-router-dom';

const Header = (props) => {
  return (
    <div
      className={`${'header'} 
      bg-transparent sticky top-0 w-full flex justify-center -z-0`}
    >
      <Navbar className={'sticky'} />
    </div>
  );
};

export default Header;
