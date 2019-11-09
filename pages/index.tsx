import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../helpers/next-apollo';
import AuthForm from 'components/authForm/authForm';
import Header from 'components/header/header';

const Home: NextPage<{}, null> = () => {
  return (
    <div>
      <Header />
      <h1>Hello Scinapse</h1>
      <AuthForm />
    </div>
  );
};

Home.getInitialProps = async () => {
  return null;
};

export default withApollo(Home);
