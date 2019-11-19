import React from 'react';
import Layout from 'components/layout/layout';
import { gql } from 'apollo-boost';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { withApollo } from 'helpers/next-apollo';
import { useQuery } from '@apollo/react-hooks';
import { SearchPapers } from './types/SearchPapers';

const SEARCH_PAPERS = gql`
  query SearchPapers($query: String!, $filter: String, $page: Int) {
    searchPapers(query: $query, sort: "RELEVANCE", filter: $filter, page: $page, enableDetectingYear: true, weightedSearchType: "c") {
      content {
        id
        title
      }
    }
  }
`;

const SearchPage: NextPage = () => {
  const router = useRouter();
  const queryParams = router.query;

  const { data, loading, error } = useQuery<SearchPapers>(SEARCH_PAPERS, {
    variables: {
      query: queryParams.query,
      filter: queryParams.filter,
      page: 0,
    },
  });

  return (
    <Layout>
      {loading && <div>is loading...</div>}
      {data?.searchPapers?.content?.map(paper => (
        <div key={paper?.id}>{paper?.title}</div>
      ))}
    </Layout>
  );
};

export default withApollo(SearchPage);
