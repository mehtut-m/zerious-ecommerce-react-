import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartShortCut from '../cart/CartShortCut';
import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import CartInfo from '../cart/CartInfo';
import MainMenu from '../menu/MainMenu';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [cartOn, setCartOn] = useState(false);
  const [menuOn, setMenuOn] = useState(false);

  const closeCartInfo = () => {
    setCartOn(false);
  };
  const toggleCartInfo = () => {
    setCartOn((prev) => !prev);
  };
  const toggleMainMenu = () => {
    setMenuOn((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between h-16 text-2xl px-4 container">
      <div className="logo">
        <Link to="/" className="logo font-['Quicksand'] font-medium text-white">
          <span className="font-['Quicksand'] text-primary"> Z</span>rious
        </Link>
      </div>
      <div className="menu-container ">
        {/* <SearchBar /> */}
        {user.isAuth && (
          <CartShortCut
            cart={cart}
            cartOn={cartOn}
            handleClick={toggleCartInfo}
          />
        )}

        <button className="ml-5" onClick={toggleMainMenu}>
          <i className="bi bi-list text-white"></i>
        </button>
      </div>

      {/* <CartInfo closeCanvas={closeCartInfo} cartOn={cartOn} cart={cart} /> */}
      {!cartOn || (
        <CartInfo closeCanvas={closeCartInfo} cartOn={cartOn} cart={cart} />
      )}
      {!menuOn || (
        <MainMenu closeCanvas={closeCartInfo} menuOn={menuOn} cart={cart} />
      )}
    </nav>
  );
};

export default Navbar;
