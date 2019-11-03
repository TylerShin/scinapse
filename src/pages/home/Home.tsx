import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_PAPER_ITEM = gql`
  query getPaper($id: String!) {
    getPaper(id: $id) {
      id
      title
      abstract
    }
  }
`;

const Home: FC = () => {
  const { data, loading, error } = useQuery(GET_PAPER_ITEM, { variables: { id: "2559394418" } });

  console.log(data.getPaper.title);

  return (
    <div>
      <h1>Happy coding with pluto react boilerplate!</h1>
      <h2>{data && data.getPaper && data.getPaper.id}</h2>
      <h2>{data && data.getPaper && data.getPaper.title}</h2>
      <h2>{data && data.getPaper && data.getPaper.abstract}</h2>
    </div>
  );
};

export default Home;
