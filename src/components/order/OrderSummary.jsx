import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import OrderSummaryList from './OrderSummaryList';

const OrderSummary = () => {
  const { cart } = useContext(CartContext);
  const { cartItems } = cart;

  return (
    <div className="order-summary-container">
      <h2 className="text-xl">Order Summary</h2>
      <OrderSummaryList />
    </div>
  );
};

export default OrderSummary;
