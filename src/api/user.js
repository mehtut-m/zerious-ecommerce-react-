import axios from '../config/axios';

const createAddress = async (payload) => {
  return axios.post(`/user/address`, payload);
};
const updateAddress = async (payload) => {
  return axios.put(`/user/address/${payload.id}`, payload);
};

export { createAddress, updateAddress };
