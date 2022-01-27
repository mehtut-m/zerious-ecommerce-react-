import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import CartShortCut from '../cart/CartShortCut';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center h-16 text-2xl">
      <div className="logo">
        <Link to="/" className="logo font-['Quicksand'] font-medium text-white">
          <span className="font-['Quicksand'] text-primary"> Z</span>rious
        </Link>
      </div>
      <SearchBar />
      <CartShortCut />
      {/* <i class="bi bi-person-fill text-white"></i> */}
    </nav>
  );
};

export default Navbar;
