import axios from '../config/axios';

const getAllProduct = async (category) => {
  try {
    const products = await axios.get('/product');
    return products;
  } catch (error) {
    console.log(error);
  }
};

const getProductByCategory = async (categoryId) => {
  try {
    return await axios.get(`/product/category/${categoryId}`);
  } catch (err) {
    console.log(err);
  }
};

const getProductByHobby = async (hobbyId) => {
  try {
    return await axios.get(`/product/hobby/${hobbyId}`);
  } catch (err) {
    console.log(err);
  }
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

export {
  getAllProduct,
  getProductById,
  getProductByHobby,
  getProductByCategory,
  getTrendingProduct,
};
