import OrderSummaryList from './OrderSummaryList';

const OrderSummary = ({ cart }) => {
  const { cartItems } = cart;

  return (
    <div className="order-summary-container px-6">
      <h2 className="text-2xl">Order Summary</h2>
      <OrderSummaryList cartItems={cartItems} />
    </div>
  );
};

export default OrderSummary;
