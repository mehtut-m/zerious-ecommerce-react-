import React from 'react';
import CartItems from './CartItems';

const CartItemList = ({ cartItems }) => {
  return (
    <ul className="py-4 overflow-scroll max-h-[70vh]">
      {cartItems.map((item) => (
        <CartItems key={item.id} cartItem={item} />
      ))}
    </ul>
  );
};

export default CartItemList;
