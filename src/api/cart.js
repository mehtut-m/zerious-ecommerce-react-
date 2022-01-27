import axios from '../config/axios';

const getMyCart = async (id) => {
  const cart = axios.get(`/order/cart`);
  return cart;
};

export { getMyCart };
