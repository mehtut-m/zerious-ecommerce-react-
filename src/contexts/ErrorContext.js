import { createContext, useEffect, useState } from 'react';

const ErrorContext = createContext();

const ErrorContextProvider = ({ children }) => {
  return <ErrorContext.Provider value={{}}>{children}</ErrorContext.Provider>;
};

export default ErrorContextProvider;

export { ErrorContext };
