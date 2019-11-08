import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../helpers/next-apollo';
import AuthForm from 'components/authForm/authForm';

const Home: NextPage<{}, null> = () => {
  return (
    <div>
      <h1>Hello Scinapse</h1>
      <AuthForm />
    </div>
  );
};

Home.getInitialProps = async () => {
  return null;
};

export default withApollo(Home);
