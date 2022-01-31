import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import BreadCrumb from '../components/BreadCrumb';
import AddressSelection from '../components/order/AddressItems';
import OrderSummary from '../components/order/OrderSummary';
import OrderSummaryFooter from '../components/order/OrderSummaryFooter';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  return (
    <main className="container ">
      <div className="">
        <BreadCrumb />
        <AddressSelection />
        <OrderSummary cart={cart} />
        <OrderSummaryFooter cart={cart} />
      </div>
    </main>
  );
};

export default Checkout;
