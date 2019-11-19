import { Resolvers } from 'apollo-boost';
import { searchPapers, getPaper } from './papers';
import { getCurrentUser, logInWithEmail } from './user';

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
