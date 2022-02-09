import axios from '../config/axios';

const createAddress = async (payload) => {
  return axios.post(`/user/address`, payload);
};

export { createAddress };
