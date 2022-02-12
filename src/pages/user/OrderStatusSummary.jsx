import { useContext, useEffect } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import OrderStatusList from '../../components/order/OrderStatusList';
import SectionHeader from '../../components/User/SectionHeader';
import Container from '../../layouts/Container';

const OrderStatusSummary = () => {
  const { orders, refreshOrder } = useContext(OrderContext);

  useEffect(() => {
    refreshOrder();
  }, []);

  return (
    <Container>
      <SectionHeader
        title="My Orders"
        subtitle="Keep track of your extremely cool purchase here."
      />
      {orders.length !== 0 ? (
        <OrderStatusList orders={orders} />
      ) : (
        <div className="py-9">
          <h3 className="text-center">
            You does not have any order. Try to make one.
          </h3>
        </div>
      )}
    </Container>
  );
};

export default OrderStatusSummary;
