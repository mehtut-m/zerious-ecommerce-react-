import { useContext, useState } from 'react';
import TestCreditCard from './TestCreditCard';
import CheckoutCreditCard from '../components/checkOut/CheckoutCreditCard';
import axios from '../config/axios';
import { CartContext } from '../contexts/CartContext';
import Checkout from './Checkout';

const Test = () => {
  const { cart } = useContext(CartContext);
  const [charge, setCharge] = useState();

  const subTotal = cart.cartItems.reduce(
    (acc, { amount, product: { price } }) => {
      return acc + amount * price;
    },
    0
  );

  const createCreditCardCharge = async (email, name, amount, token) => {
    const res = await axios.post('/checkout/credit-card', {
      email,
      name,
      amount,
      token,
    });
    console.log(res.data);
    if (res.data) {
      setCharge(res.data);
      // Load New Cart
    }
  };
  return (
    <>
      {/* <CheckoutCreditCard
        createCreditCardCharge={createCreditCardCharge}
        cart={cart}
        subTotal={subTotal}
      /> */}
      <TestCreditCard
        createCreditCardCharge={createCreditCardCharge}
        cart={cart}
        subTotal={subTotal}
      />
      {charge && <h5>Thakyou for your purchase</h5>}
    </>
  );
};

export default Test;
