import { createContext, useEffect, useReducer, useState } from 'react';
import axios from '../config/axios';
import { clearToken, getToken, setToken } from '../services/localStorage';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import authReducer from '../reducers/auth';

const AuthContext = createContext();

const initialState = { token: getToken(), user: null };

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tuser, dispatch] = useReducer(authReducer, initialState);

  const logUserIn = (token, user) => {
    setToken(token);
    setUser(user);
  };

  const logOut = () => {
    clearToken();
    setUser(null);
    toast.info('You are logged out, See you later.');
  };
  const signinOrganic = async (email, password) => {
    try {
      const res = await axios.post('/auth/login', {
        email,
        password,
      });
      logUserIn(res.data.token, res.data.user);
    } catch (error) {
      console.log(error);
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

      console.log('from backend res => ', res);
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
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //   Try to get token if token exist sign in user rightaway
    if (getToken()) {
      axios
        .get('/user/my-info')
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signinWithGoogle, signinWithFacebook, signinOrganic, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export { AuthContext };
