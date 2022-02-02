import OrderStatusHeader from '../../components/order/OrderStatusHeader';
import OrderStatusList from '../../components/order/OrderStatusList';

const OrderStatusSummary = () => {
  return (
    <main className="container">
      Order
      <OrderStatusHeader />
      <OrderStatusList />
    </main>
  );
};

export default OrderStatusSummary;
