import React from 'react';
import Drawer from '../Drawer';
import MenuContainer from './MenuContainer';
import MenuHeader from './MenuHeader';

const MainMenu = ({ menuOn, handleCloseDrawer }) => {
  return (
    <Drawer drawerOn={menuOn}>
      <div className="menu-header">
        <button className="block ml-auto mt-3" onClick={handleCloseDrawer}>
          <i className="bi bi-x-lg"></i>
        </button>
        <MenuHeader />
      </div>
      <MenuContainer />
    </Drawer>
  );
};

export default MainMenu;
