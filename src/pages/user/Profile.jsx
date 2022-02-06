import { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import SectionHeader from '../../components/SectionHeader';

import defaultProfile from '../../assets/images/default-profile.png';
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
    <main className="container shadow-md mt-6 rounded-lg border">
      <SectionHeader
        title="My Profile"
        subtitle="Manage your account and user profile info"
      />

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
          <p>{user?.email}</p>

          <label className="text-gray-400 mr-2">Log In Method :</label>
          <p>Google Account</p>

          <Button className={'w-max mt-6 px-6'} text={'Save'}></Button>
        </div>
        <div className="hidden md:flex md:h-full flex-col justify-items-start items-center flex-wrap gap-3">
          <img
            className="rounded-full w-20 h-20 mb-5"
            referrerPolicy="no-referrer"
            src={defaultProfile}
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
