import React from 'react';
import ReactDom from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';
import App from './App';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const client = new ApolloClient({
  link: new SchemaLink({ schema }) as any,
  cache: new InMemoryCache(),
});

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
