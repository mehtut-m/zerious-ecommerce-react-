import React from 'react';

const MenuItems = ({ children }) => {
  return <li className="text-xl py-4 border-b flex gap-4">{children}</li>;
};

export default MenuItems;
