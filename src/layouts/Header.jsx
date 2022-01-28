import React from 'react';
import Navbar from '../components/navbar/Navbar';

import { useLocation } from 'react-router-dom';

const Header = (props) => {
  //   const usePathname = () => {

  return (
    // location.pathname !== '/login' &&
    <div
      className={`${'header'} 
      bg-transparent sticky w-full flex justify-center`}
    >
      <Navbar />
    </div>
  );
};

export default Header;
