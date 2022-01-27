import axios from '../config/axios';

const getAllProduct = async () => {
  try {
    const products = axios.get('/product');
    return products;
  } catch (error) {}
};

export { getAllProduct };
