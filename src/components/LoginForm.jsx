import React from "react";

function LoginForm() {
  return (
    <form action="" className="flex flex-col w-full gap-4 p-5">
      <input
        type="text"
        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
      />
      <input
        type="text"
        className="
        mt-1
        block
        w-full
        rounded-lg
        border-gray-300
        shadow-sm
        focus:border-indigo-300 
        focus:ring 
        focus:ring-indigo-200 
        focus:ring-opacity-50
        bg-login-input-bg-color
                  "
        placeholder="Username"
      />

      <input
        className="
                    mt-1
                    block
                    w-full
                    rounded-lg
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 
                    focus:ring 
                    focus:ring-indigo-200 
                    focus:ring-opacity-50
                    bg-login-input-bg-color
                  "
        type="password"
        placeholder="Password"
      />
      <button className="bg-primary text-base text-white px-3 py-3 rounded-lg w-full ">
        LogIn
      </button>

      <div class="mx-auto -mb-6 pb-1">
        <span class="text-center text-xs text-white">or sign up with</span>
      </div>

      <button className="bg-white text-base px-3 py-3 rounded-lg w-full">
        Sign in with Google
      </button>
      <button className="text-white text-base px-3 py-3 rounded-lg w-full bg-facebook-color">
        Sign in with Facebook
      </button>
    </form>
  );
}

export default LoginForm;
