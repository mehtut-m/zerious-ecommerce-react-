import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import BreadCrumb from '../components/BreadCrumb';
import AddressSelection from '../components/checkOut/AddressSelection';
import OrderSummary from '../components/checkOut/OrderSummary';
import OrderSummaryFooter from '../components/checkOut/OrderSummaryFooter';
import CheckoutCreditCard from '../components/checkOut/CheckoutCreditCard';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const [selectedAddressIdx, setSelectedAddressIdx] = useState(0);
  const address = user?.user?.address;
  const { cart, loadCartInfo, successfullyCheckout } = useContext(CartContext);
  const navigate = useNavigate();

  const subTotal = cart.cartItems.reduce(
    (acc, { amount, product: { price } }) => {
      return acc + amount * price;
    },
    0
  );

  const createCreditCardCharge = async (email, name, amount, token) => {
    try {
      const {
        name,
        address: fullAddress,
        telephoneNo,
      } = address[selectedAddressIdx];

      const formattedAddress = `${name} ${fullAddress} ${telephoneNo}`;

      const res = await axios.post('/checkout/credit-card', {
        email,
        name,
        amount,
        token,
        address: formattedAddress,
      });

      if (res.status !== 200) {
        toast.error('Your payment is rejected');
      }
      successfullyCheckout();
      // Load New Cart
    } catch (err) {
      toast.error('Your payment is rejected');
      navigate('/checkout');
    }
  };

  useEffect(() => {
    loadCartInfo();
  }, []);

  return (
    <main className="container flex justify-center items-center">
      <div className="w-full">
        <BreadCrumb />
        <AddressSelection
          address={address}
          user={user}
          selectedAddressIdx={selectedAddressIdx}
          setSelectedAddressIdx={setSelectedAddressIdx}
        />
        <OrderSummary cart={cart} />
        <OrderSummaryFooter cart={cart} />

        <CheckoutCreditCard
          createCreditCardCharge={createCreditCardCharge}
          cart={cart}
          subTotal={subTotal}
        />
      </div>
    </main>
  );
};

export default Checkout;
