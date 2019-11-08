import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });

server.listen().then(({}) => {
  console.log(`🚀 Server ready`);
});
