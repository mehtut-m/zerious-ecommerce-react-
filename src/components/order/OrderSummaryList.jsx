import OrderSummaryItem from './OrderSummaryItem';

const OrderSummaryList = ({ cartItems }) => {
  // const
  return (
    <ul className="order-summary-list">
      {cartItems.map((item) => (
        <OrderSummaryItem key={item.id} orderItem={item} />
      ))}
    </ul>
  );
};

export default OrderSummaryList;
