import personal from '../../assets/icons/account.svg';
import address from '../../assets/icons/location.svg';
import heart from '../../assets/icons/heart.svg';
import order from '../../assets/icons/clipboard.svg';
import logOut from '../../assets/icons/Logout.svg';

import MenuItems from './MenuItems';

const MenuContainer = () => {
  return (
    <ul>
      <MenuItems>
        <img src={personal} alt="personal-info" />
        Personal Info
      </MenuItems>
      <MenuItems>
        <img src={address} alt="address" />
        Address
      </MenuItems>
      <MenuItems>
        <img src={heart} alt="favorite-items" />
        Favorite Items
      </MenuItems>
      <MenuItems>
        <img src={order} alt="Previous Order" /> Previous Orders
      </MenuItems>
      <MenuItems>
        <img src={logOut} alt="sign out" />
        Sign Out
      </MenuItems>
    </ul>
  );
};

export default MenuContainer;
