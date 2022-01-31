import Drawer from '../Drawer';
import MenuContainer from './MenuContainer';
import MenuHeader from './MenuHeader';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

const MainMenu = ({ menuOn, handleCloseDrawer }) => {
  const {
    user: { isAuth, user },
    logOut,
  } = useContext(AuthContext);

  return (
    <Drawer drawerOn={menuOn}>
      <div className="menu-header">
        <button className="block ml-auto mt-3" onClick={handleCloseDrawer}>
          <i className="bi bi-x-lg"></i>
        </button>
        <MenuHeader isAuth={isAuth} user={user} />
      </div>
      <MenuContainer logOut={logOut} isAuth={isAuth} />
    </Drawer>
  );
};

export default MainMenu;
