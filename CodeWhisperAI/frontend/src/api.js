import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const reviewCode = async (code, language) => {
  const response = await axios.post(`${API_URL}/review`, { code, language });
  return response.data;
};

export const debugCode = async (code, language) => {
  const response = await axios.post(`${API_URL}/debug`, { code, language });
  return response.data;
};