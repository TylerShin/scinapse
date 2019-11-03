import axios from 'axios';
import { Resolvers } from '@apollo/client';
const API_URL = "https://api.scinapse.io/papers/";

const getPaper = (id: string | number) => {
  return axios.get(API_URL + id)
};

const resolvers: Resolvers = {
  Query: {
    getPaper: async (_, { id }, context, __) => {
      console.log(id);
      console.log(context);
      const res = await getPaper(id);
      return res.data;
    }
  },
};

export default resolvers;