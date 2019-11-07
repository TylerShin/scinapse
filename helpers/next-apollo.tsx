import React from 'react';
import Head from 'next/head';
import { NextPage, NextPageContext } from 'next';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { makeExecutableSchema } from 'graphql-tools';
import { SchemaLink } from 'apollo-link-schema';
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolvers';

type ApolloCtx = NextPageContext & { apolloClient: ApolloClient<InMemoryCache> };

let apolloClient: any = null;

export function withApollo(PageComponent: NextPage<any, any>, { ssr = true } = {}) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }: any) => {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: ApolloCtx) => {
      const { AppTree } = ctx;

      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = (ctx.apolloClient = initApolloClient());

      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        if (ssr) {
          try {
            const { getDataFromTree } = await import('@apollo/react-ssr');
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />
            );
          } catch (error) {
            console.error('Error while running `getDataFromTree`', error);
          }
          Head.rewind();
        }
      }
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
      };
    };
  }

  return WithApollo;
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState?: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createApolloClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}

function createApolloClient(initialState = {}) {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache().restore(initialState),
  });
}
