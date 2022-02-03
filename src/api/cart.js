import axios from '../config/axios';

const getMyCart = async (id) => {
  const cart = axios.get(`/order/cart`);
  return cart;
};

const updateCart = async (productId, amount) => {
  const res = axios.post(`/order/`, { productId, amount });
  return res;
};

const deleteItem = async (orderItemId) => {
  const res = axios.delete(`/order/cart/item/${orderItemId}`);
  return res;
};

export { getMyCart, updateCart, deleteItem };
