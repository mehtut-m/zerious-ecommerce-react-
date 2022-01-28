import { useState } from 'react';
import './Cart.css';
import CartItemList from './CartItemList';
import Button from '../Button';
import CartFooter from './CartFooter';
const CartInfo = ({ closeCanvas, cartOn, cart }) => {
  const { order, cartItems } = cart;

  return (
    <>
      {/* Blur Screen */}
      {/* <div className="bg-black opacity-70 h-screen w-screen z-50 absolute top-0 right-0"></div> */}
      <div
        className={`cart-container bg-white z-50 h-screen absolute top-0 w-[90vw] p-9 pt-0 max-w-[22rem] md:max-w-md right-0 transition-all duration-500 ease-in-out  ${
          !cartOn ? 'cart-off ' : ''
        } `}
      >
        <div className="cart-header pb-5 border-b flex justify-between">
          <h3 className="text-2xl mt-8">My Cart</h3>
          <button onClick={closeCanvas}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        {cartItems.length < 1 ? (
          <p className="pt-5 text-base">Your cart is Empty.</p>
        ) : (
          <>
            <CartItemList cartItems={cartItems} />

            <div className="cart-footer pt-5 border-t">
              <CartFooter cartItems={cartItems} />
              <Button text="Check Out"></Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartInfo;
