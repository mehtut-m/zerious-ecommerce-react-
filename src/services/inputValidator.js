const isEmail = (email) => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    typeof email === 'string' && emailRegEx.test(email.trim().toLowerCase())
  );
};

const checkPasswordLength = (password) => {
  return typeof password === 'string' && password.trim().length >= 6;
};

const isPasswordMatch = (password, confirmPassword) => {
  return (
    typeof password === 'string' &&
    typeof confirmPassword === 'string' &&
    password.trim() === confirmPassword.trim()
  );
};

const isValidName = (name) => {
  return (
    typeof name === 'string' && name.trim().length > 0 && !name.includes(' ')
  );
};

export { isEmail, checkPasswordLength, isPasswordMatch, isValidName };
