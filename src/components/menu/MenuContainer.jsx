import personal from '../../assets/icons/account.svg';
import address from '../../assets/icons/location.svg';
import heart from '../../assets/icons/heart.svg';
import order from '../../assets/icons/clipboard.svg';
import signOut from '../../assets/icons/Logout.svg';

import MenuItems from './MenuItems';

const MenuContainer = ({ isAuth, logOut, handleCloseDrawer }) => {
  return (
    <ul>
      {isAuth ? (
        <>
          {' '}
          <MenuItems path="/user/profile" handleCloseDrawer={handleCloseDrawer}>
            <img src={personal} alt="personal-info" />
            Personal Info
          </MenuItems>
          <MenuItems path="/user/address" handleCloseDrawer={handleCloseDrawer}>
            <img src={address} alt="address" />
            Address
          </MenuItems>
          <MenuItems path="/user/order" handleCloseDrawer={handleCloseDrawer}>
            <img src={order} alt="Previous Order" /> Previous Orders
          </MenuItems>
          <MenuItems handleClick={logOut} handleCloseDrawer={handleCloseDrawer}>
            <img src={signOut} alt="sign out" />
            Log Out
          </MenuItems>
        </>
      ) : (
        <>
          <MenuItems path={'/register'}>Register</MenuItems>
          <MenuItems path={'/login'}>Log In</MenuItems>
        </>
      )}
    </ul>
  );
};

export default MenuContainer;
