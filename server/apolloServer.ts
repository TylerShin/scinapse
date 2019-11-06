import { ApolloServer } from 'apollo-server';
import typeDefs from '../graphql/typeDefs';

const server = new ApolloServer({ typeDefs });

server.listen().then(({}) => {
  console.log(`🚀 Server ready`);
});
