import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../helpers/next-apollo';
import Layout from 'components/layout/layout';

const Home: NextPage<{}, null> = () => {
  return (
    <Layout>
      <h1>Scinapse</h1>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  return null;
};

export default withApollo(Home);
