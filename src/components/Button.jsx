import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

function LoginButton({ type, text, className, handleClick }) {
  return (
    <button
      type={type}
      className={`btn bg-primary  text-white  hover:bg-orange-500 focus:ring-orange-500 ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default LoginButton;
