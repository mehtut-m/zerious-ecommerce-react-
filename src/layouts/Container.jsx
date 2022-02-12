import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container shadow-md mt-6 rounded-lg border mb-6">
      {children}
    </div>
  );
};

export default Container;
