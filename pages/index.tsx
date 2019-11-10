import React from 'react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { withApollo } from '../helpers/next-apollo';
import MainLogo from 'atoms/icons/scinapse-home-logo.svg';
import Layout from 'components/layout/layout';
import SearchBox from 'components/searchBox/searchBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 590px;
`;

const Title = styled.div`
  font-size: 18px;
  letter-spacing: -0.3px;
  color: #667f98;
  margin: 12px 0 48px 0;
  text-align: center;
`;

const Home: NextPage<{}, null> = () => {
  return (
    <Layout>
      <h1 style={{ display: 'none' }}>Scinapse | Academic search engine for paper</h1>
      <Container>
        <MainLogo style={{ width: 157, height: 114 }} />
        <Title>Academic Search Engine</Title>
        <SearchBox
          initialValue=""
          onSubmit={values => {
            console.log(values);
          }}
        />
      </Container>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  return null;
};

export default withApollo(Home);
