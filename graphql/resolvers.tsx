import axios from 'axios';
import { Resolvers } from 'apollo-boost';
const API_URL = 'https://api.scinapse.io/';

const getPaper = (id: string | number) => {
  return axios.get(`${API_URL}papers/${id}`);
};

const logInWithEmail = (email: string, password: string) => {
  return axios.post(`${API_URL}auth/login`, { email, password });
};

const resolvers: Resolvers = {
  Query: {
    getPaper: async (_, { id }, _context, __) => {
      const res = await getPaper(id);
      return res.data;
    },
  },
  Mutation: {
    logInWithEmail: async (_, { email, password }, _context, __) => {
      const res = await logInWithEmail(email, password);
      return res.data;
    },
  },
};

export default resolvers;
