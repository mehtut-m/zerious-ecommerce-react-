import { useContext, useState } from 'react';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { AuthContext } from '../contexts/AuthContext';

import 'react-toastify/dist/ReactToastify.css';

import LoginButton from '../components/Button';

function Login() {
  const { signinWithGoogle, signinWithFacebook, signinOrganic } =
    useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const res = await signinOrganic(email, password);
  };

  return (
    <main className="min-h-screen bg-gray-100 bg-gradient-to-b from-black to-main-bg-color  flex flex-col justify-center py-12 px-6 lg:px-8 login">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-5">
        <h2 className="mt-6 text-center text-3xl text-white font-normal">
          Sign In to
          <span className="logo font-['Quicksand'] font-bold">
            <span className="font-['Quicksand'] text-primary"> Z</span>rious
          </span>
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form
            className="mb-0 space-y-6"
            onSubmit={handleFormSubmit}
            noValidate
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <LoginButton
                type="submit"
                className="bg-primary"
                text="Sign In"
              />
            </div>

            {/* Third Party Login */}
            <GoogleLogin
              clientId="413135692964-nlaifqt1dgkk9tijhsh0c0aut58kj32f.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={signinWithGoogle}
              onFailure={() => console.log('canceled')}
              cookiePolicy={'single_host_origin'}
              render={(renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  className="bg-white text-black w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  hover:bg-gray-100/95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-100"
                >
                  Sign In With Google
                </button>
              )}
            />

            <FacebookLogin
              appId={'4615638975198486'}
              autoLoad={false}
              callback={signinWithFacebook}
              disableMobileRedirect={true}
              fields="name,email,picture"
              render={(renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="bg-facebook-color w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Sign in With Facebook
                </button>
              )}
            />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
