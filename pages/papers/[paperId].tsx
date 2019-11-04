import React, { FC } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/react-hooks";
import { NextPage } from 'next';
import { withApollo } from 'helpers/next-apollo';

const GET_PAPER_ITEM = gql`
  query getPaper($id: String!) {
    getPaper(id: $id) {
      id
      title
      abstract
    }
  }
`;

const PaperShow: NextPage<{}, null> = () => {
  const { data, loading, error } = useQuery(GET_PAPER_ITEM, { variables: { id: '2559394418' } });
  return (
    <div>
      <h1>{data && data.getPaper && data.getPaper.title}</h1>
      <h2>{data && data.getPaper && data.getPaper.title}</h2>
    </div>
  );
};

PaperShow.getInitialProps = async () => {
  return null;
};

export default withApollo(PaperShow);

