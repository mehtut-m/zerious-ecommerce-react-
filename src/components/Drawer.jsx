import Overlay from './Overlay';

const Drawer = ({ drawerOn, children, handleCloseDrawer }) => {
  return (
    <>
      <Overlay isOn={drawerOn} handleClose={handleCloseDrawer} />
      <div
        className={`drawer-container bg-white z-50 h-screen fixed top-0 w-[90vw] p-9 pt-0 max-w-[22rem] md:max-w-md right-0 transition-all duration-500 ease-in-out  ${
          !drawerOn ? 'drawer-off ' : ''
        } flex flex-col`}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
