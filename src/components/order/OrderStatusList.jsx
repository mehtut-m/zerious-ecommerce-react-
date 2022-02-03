import OrderStatusItem from './OrderStatusItem/OrderItemContainer';

const OrderStatusList = ({ orders }) => {
  return (
    <ul className="mt-5">
      {orders.map((item) => (
        <OrderStatusItem key={item.id} order={item} />
      ))}
    </ul>
  );
};

export default OrderStatusList;
