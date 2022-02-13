import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container shadow-md my-6 rounded-lg border">{children}</div>
  );
};

export default Container;
