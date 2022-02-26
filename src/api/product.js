import axios from '../config/axios';

const getAllProduct = async () => {
  try {
    const products = await axios.get('/product');
    return products;
  } catch (error) {}
};

const getProductById = async (productId) => {
  try {
    return await axios.get(`/product/${productId}`);
  } catch (err) {
    console.log(err);
  }
};

const getTrendingProduct = async () => {
  try {
    return await axios.get(`/product/trending`);
  } catch (err) {
    console.log(err);
  }
};

export { getAllProduct, getProductById, getTrendingProduct };
