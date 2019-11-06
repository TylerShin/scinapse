import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../helpers/next-apollo';

const Home: NextPage<{}, null> = () => {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
};

Home.getInitialProps = async () => {
  return null;
};

export default withApollo(Home);
