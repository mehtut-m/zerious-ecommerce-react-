import React from "react";

function LoginForm() {
  return (
    // <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    //   <div class="shrink-0">
    //     <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
    //   </div>
    //   <div>
    //     <div class="text-xl font-medium text-black">ChitChat</div>
    //     <p class="text-gray-500">You have a new message!</p>
    //   </div>
    <form action="" className="p-5">
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
      ></input>

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
      <button className="bg-primary text-base text-white py-3 rounded-lg w-full ">
        LogIn
      </button>

      <button className="bg-white rounded-lg w-full text-base py-3">
        Sign in with Google
      </button>
      <button className="text-white rounded-lg w-full text-base bg-facebook-color py-3">
        Sign in with Facebook
      </button>
    </form>
    // </div>
  );
}

export default LoginForm;
