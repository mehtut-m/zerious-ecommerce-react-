import React from "react";

function LoginForm() {
  return (
    <div class="flex justify-center my-2 mx-4 md:mx-0">
      <form class="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Password"
            >
              Email address
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
              type="email"
              required
            />
          </div>
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Password"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
              type="password"
              required
            />
          </div>
          <div class="w-full flex items-center justify-between px-3 mb-3 ">
            <label for="remember" class="flex items-center w-1/2">
              <input
                type="checkbox"
                name=""
                id=""
                class="mr-1 bg-white shadow"
              />
              <span class="text-sm text-gray-700 pt-1">Remember Me</span>
            </label>
            <div class="w-1/2 text-right">
              <a href="/" class="text-blue-500 text-sm tracking-tight">
                Forget your password?
              </a>
            </div>
          </div>
          <div class="w-full md:w-full px-3 mb-6">
            <button class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
              Sign in
            </button>
          </div>
          <div class="mx-auto -mb-6 pb-1">
            <span class="text-center text-xs text-gray-700">
              or sign up with
            </span>
          </div>
          <div class="flex flex-col    items-center w-full mt-2">
            <div class="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
              <button class="appearance-none flex items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                <svg
                  class="h-6 w-6 fill-current text-gray-700"
                  viewBox="0 0 512 512"
                >
                  <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </button>
            </div>
            <div class="w-full md:w-1/3 px-3 pt-4 mx-2">
              <button class="appearance-none flex items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                <svg
                  class="h-6 w-6 fill-current text-gray-700"
                  viewBox="0 0 512 512"
                >
                  <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                </svg>
              </button>
            </div>
            <div class="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400"></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
