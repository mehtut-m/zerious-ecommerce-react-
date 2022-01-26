const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';
const USER_LOADED = 'USER_LOADED';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';
const LOADING = 'LOADING';

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED: {
      const newState = { ...state, user: action.payload.user };
      return newState;
    }
    case LOGIN_SUCCESS: {
      return state;
    }
    default: {
      return state;
    }
  }
};
export default authReducer;
