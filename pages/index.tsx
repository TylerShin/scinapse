import React, { FC } from 'react';
import withData from '../helpers/withData';
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/react-hooks";
import { NextPage } from 'next';

const GET_PAPER_ITEM = gql`
  query getPaper($id: String!) {
    getPaper(id: $id) {
      id
      title
      abstract
    }
  }
`;

const Home: NextPage<{}, null> = () => {
  const { data, loading, error } = useQuery(GET_PAPER_ITEM, { variables: { id: '2559394418' } });
  console.log(data, loading ,error);

  return (
    <div>
      <h1>{data && data.getPaper && data.getPaper.title}</h1>
      <h2>{data && data.getPaper && data.getPaper.title}</h2>
    </div>
  );
};

Home.getInitialProps = async () => {
  return null;
};

export default withData(Home);
