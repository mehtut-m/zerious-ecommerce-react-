import { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import SectionHeader from '../../components/User/SectionHeader';
import defaultProfile from '../../assets/images/default-profile.png';
import { AuthContext } from '../../contexts/AuthContext';
import Container from '../../layouts/Container';

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
    <Container>
      <SectionHeader
        title="My Profile"
        subtitle="Manage your account and user profile info"
      />
      <div className="px-4">
        <form className="my-6 flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-0">
          <div className="min-w-max w-full md:max-w-[55%] grid  md:grid-cols-2 gap-4">
            <label className="text-secondary-typography">First Name :</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="text-secondary-typography">Last Name :</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label className="text-secondary-typography mr-2 ">Email :</label>
            <p>{user?.email}</p>

            <label className="text-secondary-typography mr-2">
              Log In Method :
            </label>
            <p>{`${user?.accountType} Account`}</p>
          </div>
          <div className="flex md:h-full flex-col justify-items-start items-center flex-wrap gap-3">
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
            <p className="text-center">
              ขนาดไฟล์: สูงสุด 1 MB ไฟล์ที่รองรับ: .JPEG, .PNG
            </p>
          </div>
        </form>
        <Button
          className={'mt-6 px-6 m-auto max-w-sm w-full md:m-[unset] md:w-max '}
          text={'Save'}
        />
      </div>
    </Container>
  );
};

export default Profile;
