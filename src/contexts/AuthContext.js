import { createContext, useEffect, useState } from 'react';
import axios from '../config/axios';
import { clearToken, getToken, setToken } from '../services/localStorage';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logUserIn = (token, user) => {
    setToken(token);
    setUser(user);
  };

  const signinOrganic = async (email, password) => {
    try {
      const res = await axios.post('/auth/login', {
        email,
        password,
      });
      logUserIn(res.data.token, res.data.user);
      console.log('hi');
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

  useEffect(() => {
    //   Try to get token if token exist sign in user rightaway
    if (getToken()) {
      axios
        .get('/user/my-info')
        .then((res) => {
          console.log(res.data.user);
          setUser(res.data.user);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signinWithGoogle, signinWithFacebook, signinOrganic }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export { AuthContext };
