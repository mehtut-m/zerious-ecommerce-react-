import axios from '../config/axios';

const getAllProduct = async () => {
  const products = axios.get('/product');
  return products;
};

export { getAllProduct };
