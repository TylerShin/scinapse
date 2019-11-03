import { makeExecutableSchema } from 'graphql-tools';
import { withData } from 'next-apollo';
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolvers';
import { InMemoryCache } from '@apollo/client';
import { SchemaLink } from 'apollo-link-schema';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const config = { link: new SchemaLink({ schema }), cache: new InMemoryCache() };

export default withData(config);
