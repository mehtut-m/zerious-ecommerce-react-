import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function LoginButton({ type, text, className }) {
  // const resolveAfter3Sec = new Promise((resolve, reject) =>
  //   setTimeout(reject, 3000)
  // );

  // const notify = () =>
  //   toast.promise(resolveAfter3Sec, {
  //     pending: 'Login pending',
  //     success: 'Good to go, Welcome. 👌',
  //     error: 'Promise rejected 🤯',
  //   });

  return (
    <button
      type={type}
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
      // onClick={notify}
    >
      {text}
    </button>
  );
}

export default LoginButton;
