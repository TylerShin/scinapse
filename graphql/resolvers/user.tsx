import axios from 'axios';
import { API_URL } from './constants';

export const logInWithEmail = (email: string, password: string) => {
  return axios.post(`${API_URL}auth/login`, { email, password });
};

export const getCurrentUser = () => {
  return axios.get(`${API_URL}auth/login`, { withCredentials: true });
};
