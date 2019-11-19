import React, { useState } from 'react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { withApollo } from '../helpers/next-apollo';
import Logo from 'atoms/icons/scinapse-home-logo.svg';
import Layout from 'components/layout/layout';
import SearchBox from 'components/searchBox/searchBox';
import SelectableInput from 'components/selectableInput/selectableInput';
import { useLazyQuery } from '@apollo/react-hooks';
import { debounce } from 'lodash';
import { gql } from 'apollo-boost';
import { getAutoCompleteSearchKeyword } from './types/getAutoCompleteSearchKeyword';

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

const GET_AUTO_COMPLETE_KEYWORDS = gql`
  query getAutoCompleteSearchKeyword($query: String) {
    getAutoCompleteSearchKeyword(query: $query) {
      keyword
    }
  }
`;

const debouncedGetAutoCompleteKeyword = debounce((fetchFunc: Function) => {
  fetchFunc();
}, 200);

const Home: NextPage<{}, null> = () => {
  const [getAutoCompleteKeyword, { loading, data: autoCompleteResult }] = useLazyQuery<getAutoCompleteSearchKeyword>(
    GET_AUTO_COMPLETE_KEYWORDS
  );

  console.log('loading := ', loading);

  const list = autoCompleteResult?.getAutoCompleteSearchKeyword || [];

  return (
    <Layout>
      <h1 style={{ display: 'none' }}>Scinapse | Academic search engine for paper</h1>
      <Container>
        <MainLogo />
        <ContentWrapper>
          <Title>Academic Search Engine</Title>
          <SearchBox initialValue="" />
          <GSContent>We’re better than Google Scholar. We mean it.</GSContent>
          <SelectableInput
            initialValue=""
            availableList={list.map((word, i) => (
              <li
                onClick={() => {
                  console.log('adsfdjkfljaslkdfjklajsfkl');
                }}
                key={i}
              >
                {word.keyword}
              </li>
            ))}
            onSubmitForm={(value: string) => {
              console.log(value);
            }}
            onChangeField={(value: string) => {
              debouncedGetAutoCompleteKeyword(() => {
                getAutoCompleteKeyword({ variables: { query: value } });
              });
            }}
          />
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export default withApollo(Home);
