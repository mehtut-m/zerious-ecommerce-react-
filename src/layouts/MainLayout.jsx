import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col items-center z-10 px-4 main-container">
      {children}
    </main>
  );
};

export default MainLayout;
