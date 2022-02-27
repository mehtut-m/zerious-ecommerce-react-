import { useState, useRef, useContext } from 'react';
import { toast } from 'react-toastify';
import Button from './Button';
import FormInput from './inputs/FormInput';
import {
  isEmail,
  checkPasswordLength,
  isPasswordMatch,
  isValidName,
} from '../services/inputValidator';
import { AuthContext } from '../contexts/AuthContext';

const RegisterForm = () => {
  const { register } = useContext(AuthContext);
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toastId = useRef(null);

  const registerErrToast = (errMessage) => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error(errMessage, { autoClose: 2500 });
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      registerData;

    if (!isEmail(email)) {
      return registerErrToast('Please enter a valid email');
    }
    if (!checkPasswordLength(password)) {
      // Verify password
      return registerErrToast('Password must be at least 6 characters');
    }
    if (!isPasswordMatch(password, confirmPassword)) {
      return registerErrToast('Password does not match');
    }

    if (!isValidName(firstName)) {
      return registerErrToast('Please enter your first name');
    }

    if (!isValidName(lastName)) {
      return registerErrToast('Please enter your last name');
    }

    const user = {};
    for (let key in registerData) {
      user[key] = registerData[key].trim();
    }
    await register({ ...user });
  };

  return (
    <form
      className="flex flex-col gap-3 w-full md:w-[50%] p-5 py-8"
      onSubmit={handleSubmitRegister}
      noValidate
    >
      <FormInput
        title="email"
        type="email"
        label="Email"
        value={registerData.email}
        handleChange={handleInputChange}
      />
      <FormInput
        title="password"
        type="password"
        label="Password"
        value={registerData.password}
        handleChange={handleInputChange}
      />

      <FormInput
        title="confirmPassword"
        type="password"
        label="Confirm Password"
        value={registerData.confirmPassword}
        handleChange={handleInputChange}
      />
      <FormInput
        title="firstName"
        type="text"
        label="First Name"
        value={registerData.firstName}
        handleChange={handleInputChange}
      />
      <FormInput
        title="lastName"
        type="text"
        label="Last Name"
        value={registerData.lastName}
        handleChange={handleInputChange}
      />

      <div className="w-full md:w-full px-3">
        <Button
          className="font-semibold uppercase bg-primary mt-8 px-3.5"
          text="Create Account"
          type="submit"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
