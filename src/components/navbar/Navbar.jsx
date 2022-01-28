import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import CartShortCut from '../cart/CartShortCut';
import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  console.log(user);
  console.log(cart);

  return (
    <nav className="flex items-center justify-between h-16 text-2xl px-4 container">
      <div className="logo">
        <Link to="/" className="logo font-['Quicksand'] font-medium text-white">
          <span className="font-['Quicksand'] text-primary"> Z</span>rious
        </Link>
      </div>
      <div className="menu-container">
        {/* <SearchBar /> */}
        {user.isAuth && <CartShortCut cart={cart} />}
        {/* <i class="bi bi-person-fill text-white"></i> */}
      </div>
    </nav>
  );
};

export default Navbar;
