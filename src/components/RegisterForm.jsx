import { useState } from 'react';
import { toast, toastify } from 'react-toastify';
import Button from './Button';
import FormInput from './inputs/FormInput';

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      registerData;

    if (typeof firstName !== 'string' || firstName.trim().length <= 0) {
      return toast.error('Please enter your first name');
    }

    if (typeof lastName !== 'string' || lastName.trim().length <= 0) {
      return toast.error('Please enter your last name');
    }

    if (password.trim().length < 6) {
      // Verify password
      return toast.error('Password must be at least 6 characters');
    }
    if (password !== confirmPassword) {
      return toast.error('Password does not match');
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmitLogin}>
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
