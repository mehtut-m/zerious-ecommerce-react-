import { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
  const {
    user: { user },
  } = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (user) {
      const { firstName, lastName } = user;
      setFirstName(firstName);
      setLastName(lastName);
    }
  }, [user]);

  return (
    <main className="container shadow-md mt-6">
      <div className="user-pg-header">
        <h2 className="user-pg-title ">My Profile</h2>
        <p className="text-base">Manage your account and user profile info</p>
      </div>

      <form className="my-6 px-4 flex flex-row  justify-between">
        <div className="min-w-max w-full max-w-[55%] grid grid-cols-2 gap-4">
          <label className="text-gray-400">First Name :</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="text-gray-400">Last Name :</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className="text-gray-400 mr-2">Email :</label>
          <p>crazym2211@gmail.com</p>

          <label className="text-gray-400 mr-2">Log In Method :</label>
          <p>Google Account</p>

          <Button className={'w-max mt-6 px-6'} text={'Save'}></Button>
        </div>
        <div className="hidden md:flex md:h-full flex-col justify-items-start items-center flex-wrap gap-3">
          <img
            className="rounded-full w-20 h-20 mb-5"
            referrerPolicy="no-referrer"
            src="https://lh3.googleusercontent.com/a/AATXAJxzJoabUfsYcAYNDhydg5-cmxmXWv3tJreOgl1O=s96-c"
            alt=""
          />
          <button
            type="button"
            className="border py-2 px-3  hover:bg-primary mb-5"
          >
            <label htmlFor="profileImg" className="cursor-pointer">
              Choose File
            </label>
          </button>
          <input
            type="file"
            id="profileImg"
            name="profileImg"
            className="hidden"
          />
          ขนาดไฟล์: สูงสุด 1 MB ไฟล์ที่รองรับ: .JPEG, .PNG
        </div>
      </form>
    </main>
  );
};

export default Profile;
