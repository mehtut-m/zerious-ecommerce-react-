const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';
const LOADING = 'LOADING';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAIL = 'AUTH_FAIL';

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case AUTH_SUCCESS: {
      console.log(action.payload.user);
      return { ...state, user: action.payload.user, isAuth: true };
    }
    case LOADING: {
      return state;
    }

    case AUTH_FAIL: {
      return;
    }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT: {
      return { ...state, user: null, token: null, isAuth: false };
    }
    default: {
      return state;
    }
  }
};
export default authReducer;
