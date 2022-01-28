import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

function LoginButton({ type, text, className, handleClick }) {
  return (
    <button
      type={type}
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default LoginButton;
