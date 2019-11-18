import React from 'react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { withApollo } from '../helpers/next-apollo';
import Logo from 'atoms/icons/scinapse-home-logo.svg';
import Layout from 'components/layout/layout';
import SearchBox from 'components/searchBox/searchBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
`;

const Title = styled.div`
  font-size: 18px;
  letter-spacing: -0.3px;
  color: #667f98;
  margin: 12px 0 48px 0;
  text-align: center;
`;

const ContentWrapper = styled.div`
  width: 590px;
`;

const GSContent = styled.div`
  text-align: center;
  color: #6f8398;
  margin: 24px 0 56px 0;
`;

const MainLogo = styled(Logo)`
  margin-top: 90px;
  width: 157px;
  height: 114px;
`;

const Home: NextPage<{}, null> = () => {
  return (
    <Layout>
      <h1 style={{ display: 'none' }}>Scinapse | Academic search engine for paper</h1>
      <Container>
        <MainLogo />
        <ContentWrapper>
          <Title>Academic Search Engine</Title>
          <SearchBox initialValue="" />
          <GSContent>We’re better than Google Scholar. We mean it.</GSContent>
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export default withApollo(Home);
