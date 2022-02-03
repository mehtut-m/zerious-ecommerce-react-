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
    <main className="container shadow-md mt-6 border rounded-lg">
      <OrderStatusHeader />
      {orders.length !== 0 ? (
        <OrderStatusList orders={orders} />
      ) : (
        <div className="py-9">
          <h3 className="text-center">
            You does not have any order. Try to make one.
          </h3>
        </div>
      )}
    </main>
  );
};

export default OrderStatusSummary;
