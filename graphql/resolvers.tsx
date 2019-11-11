import axios from 'axios';
import { Resolvers } from 'apollo-boost';
const API_URL = 'https://api.scinapse.io/';

const getPaper = (id: string | number) => {
  return axios.get(`${API_URL}papers/${id}`);
};

const logInWithEmail = (email: string, password: string) => {
  return axios.post(`${API_URL}auth/login`, { email, password });
};

const getCurrentUser = () => {
  return axios.get(`${API_URL}auth/login`, { withCredentials: true });
};

interface SearchPapersParams {
  query: string;
  sort: string; // TODO: change it to the limited values e.g. RELEVANCE...
  filter: string;
  page: number;
  enableDetectingYear: boolean;
  weightedSearchType: 'a' | 'b' | 'c' | 'd';
}
const searchPapers = ({ query, sort, filter, page = 0, enableDetectingYear, weightedSearchType }: SearchPapersParams) => {
  return axios.get(`${API_URL}search`, {
    params: {
      q: query,
      sort,
      filter,
      page,
      yd: enableDetectingYear,
      wcm: weightedSearchType,
    },
  });
};

const resolvers: Resolvers = {
  Query: {
    getPaper: async (_, { id }, _context, __) => {
      const res = await getPaper(id);
      return res.data;
    },
    currentUser: async () => {
      const user = await getCurrentUser();
      return user;
    },
    searchPapers: async (_, { query, sort, filter, page = 0, enableDetectingYear, weightedSearchType }, ___, ____) => {
      const res = await searchPapers({ query, sort, filter, page, enableDetectingYear, weightedSearchType });
      return res.data.data;
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
