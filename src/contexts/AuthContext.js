import { createContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../config/axios';
import { clearToken, getToken, setToken } from '../services/localStorage';
import { toast } from 'react-toastify';
import authReducer from '../reducers/auth';
import { createAddress } from '../api/user';

const AuthContext = createContext();

const initialState = { token: getToken(), user: null, isAuth: false };

const AuthContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, initialState);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const logUserIn = (token, user) => {
    setToken(token);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { user },
    });
    toast.success('You are good to go, Welcome!', { autoClose: 1300 });
  };

  const logOut = () => {
    clearToken();
    dispatch({
      type: 'LOGOUT',
      payload: {},
    });
    toast.info('You are logged out, See you later.', { autoClose: 1500 });
    navigate('/', { replace: true });
  };

  const signinOrganic = async (email, password) => {
    try {
      const res = await axios.post('/auth/login', {
        email,
        password,
      });
      logUserIn(res.data.token, res.data.user);
      return res.data.user;
    } catch (error) {
      console.log(error);
      toast.warning('Invalid Email or Password');
    }
  };

  const signinWithGoogle = async (response) => {
    try {
      const {
        tokenObj: { access_token },
        profileObj: { googleId, email, name },
        tokenId,
      } = response;
      const user = { name, email, accessToken: access_token, userId: googleId };

      const res = await axios.post('/auth/login/google', {
        user,
        tokenId,
      });
      console.log('from backend res => ', res);
      logUserIn(res.data.token, res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const signinWithFacebook = async (response) => {
    try {
      const { accessToken } = response;

      const res = await axios.post('auth/login/fb', {
        accessToken,
      });
      logUserIn(res.data.token, res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const register = async ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  }) => {
    try {
      const res = await axios.post('auth/register', {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
      });

      if (res.status === 200) {
        setTimeout(() => {
          logUserIn(res.data.token, res.data.user);
          navigate('/');
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createNewAddress = async (name, telephoneNo, address) => {
    const res = await createAddress({ name, telephoneNo, address });
    dispatch({
      type: 'CREATE_ADDRESS_SUCCESS',
      payload: { address: res.data.address },
    });
  };

  useEffect(() => {
    //   Try to get token if token exist sign in user rightaway
    if (user.token) {
      axios
        .get('/user/my-info')
        .then((res) => {
          dispatch({
            type: 'AUTH_SUCCESS',
            payload: { user: res.data.user },
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        createNewAddress,
        signinWithGoogle,
        signinWithFacebook,
        signinOrganic,
        register,
        logOut,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export { AuthContext };
