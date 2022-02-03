import React from 'react';
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <main className="container w-full">
      <div className="ml-2">
        <h1 className="text-3xl font-semibold mb-3">Create Account</h1>
        <p className="mb-4">Be a part of our Zerious community.</p>
      </div>
      <div className=" md:flex w-full rounded-lg overflow-hidden shadow-xl border">
        <RegisterForm />
        <div className="w-[50%] hidden md:block bg-black">
          <div className="logo font-['Quicksand'] font-medium text-white h-full flex justify-center items-center text-5xl">
            <span className="font-['Quicksand'] text-primary"> Z</span>rious
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
