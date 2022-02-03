import { createContext, useEffect, useState } from 'react';
import { getAllOrder } from '../api/order';

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrder()
      .then((res) => setOrders(res.data.order))
      .catch((err) => console.log(err));
  }, []);

  const refreshOrder = async () => {
    try {
      const res = await getAllOrder();
      setOrders(res.data.order);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, refreshOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export { OrderContext };
