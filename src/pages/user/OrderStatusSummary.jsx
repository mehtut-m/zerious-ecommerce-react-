import { useContext, useEffect } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import OrderStatusHeader from '../../components/order/OrderStatusHeader';
import OrderStatusList from '../../components/order/OrderStatusList';

const OrderStatusSummary = () => {
  const { orders, refreshOrder } = useContext(OrderContext);
  useEffect(() => {
    refreshOrder();
  }, []);

  return (
    <main className="container shadow-md mt-6">
      <OrderStatusHeader />
      <OrderStatusList orders={orders} />
    </main>
  );
};

export default OrderStatusSummary;
