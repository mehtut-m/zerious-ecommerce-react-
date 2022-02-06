import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Header = (props) => {
  return (
    <>
      <header
        className={`${'header'} 
      bg-transparent sticky top-0 w-full flex justify-center -z-0`}
      >
        <Navbar className={'sticky'} />
      </header>
    </>
  );
};

export default Header;
