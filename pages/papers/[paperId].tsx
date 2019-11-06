import React from 'react';
import { useRouter } from 'next/router'
import { NextPage } from 'next';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'helpers/next-apollo';
import { GetPaperAtPaperShow } from './types/GetPaperAtPaperShow';

const GET_PAPER_ITEM = gql`
  query GetPaperAtPaperShow($id: String!) {
    getPaper(id: $id) {
      id
      title
      abstract
    }
  }
`;

const PaperShow: NextPage<{}, null> = () => {
  const router = useRouter();
  const { paperId } = router.query;
  const { data, loading, error } = useQuery<GetPaperAtPaperShow>(GET_PAPER_ITEM, { variables: { id: paperId } });
  
  const paper = data?.getPaper;

  console.log(paper, loading, error);

  if (error) console.error(error);

  if (loading) return <div><h1>LOADING ...</h1></div>

  if (!paper) return null; // TODO: Return 404

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
