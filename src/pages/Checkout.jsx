import { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import BreadCrumb from '../components/BreadCrumb';
import AddressSelection from '../components/order/AddressItems';
import OrderSummary from '../components/order/OrderSummary';
import OrderSummaryFooter from '../components/order/OrderSummaryFooter';
import PaymentOptions from '../components/order/PaymentOptions';

const Checkout = () => {
  const { cart, loadCartInfo } = useContext(CartContext);

  useEffect(() => {
    loadCartInfo();
  }, []);

  return (
    <main className="container ">
      <div className="">
        <BreadCrumb />
        <AddressSelection />
        <OrderSummary cart={cart} />
        <OrderSummaryFooter cart={cart} />
        <PaymentOptions />
      </div>
    </main>
  );
};

export default Checkout;
