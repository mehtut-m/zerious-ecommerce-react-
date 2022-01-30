import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import defaultImg from '../../assets/images/default-profile.png';

const MenuHeader = ({ isAuth }) => {
  const {
    user: { user },
  } = useContext(AuthContext);

  return isAuth ? (
    <div className="flex flex-1 border-b py-3">
      <img
        src={defaultImg}
        alt="avatar"
        className="w-12 h-12 rounded-full text-sm"
      />
      <div className="user-info ml-6 ">
        <h3 className="text-base">Mehtut Menon</h3>
        <p className="text-sm text-primary">Z-Point : 20 pts</p>
      </div>
    </div>
  ) : (
    <div>
      <h2 className="">Welcome to Zerious</h2>
      <p className="mt-2 text-gray-500 text-base">Be Zerious on hobbies.</p>
    </div>
  );
};

export default MenuHeader;
