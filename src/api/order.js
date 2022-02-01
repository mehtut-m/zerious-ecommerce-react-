import axios from '../config/axios';

const getAllOrder = async () => {
  const order = axios.get(`/order/`);
  return order;
};
const getOrderById = async (id) => {
  const order = axios.get(`/order/${id}`);
  return order;
};

export { getAllOrder, getOrderById };
