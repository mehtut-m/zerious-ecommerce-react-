import { Link } from 'react-router-dom';

const MenuItems = ({
  children,
  handleClick,
  path,
  handleCloseDrawer = () => {},
}) => {
  return (
    <Link to={path || '/'}>
      <li
        className="text-xl py-4 border-b flex gap-4 cursor-pointer hover:text-primary"
        onClick={() => {
          if (handleClick) {
            handleClick();
          }
          handleCloseDrawer();
        }}
      >
        {children}
      </li>
    </Link>
  );
};

export default MenuItems;
