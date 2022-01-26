import React from 'react';
import Navbar from './navbar/Navbar';
import { useLocation } from 'react-router-dom';

const Header = (props) => {
  //   const usePathname = () => {
  const location = useLocation();

  return (
    // location.pathname !== '/login' &&
    <div
      className={`${'header'} 
      
      bg-transparent sticky w-full`}
    >
      <Navbar />
    </div>
  );
};

export default Header;
