import React from 'react';
import Layout from 'components/layout/layout';
import { gql } from 'apollo-boost';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { withApollo } from 'helpers/next-apollo';
import { useQuery } from '@apollo/react-hooks';

// q: john f 2013
// sort: RELEVANCE
// filter: year=:,fos=,journal=
// page: 0
// yd: true
// wcm: a

const SEARCH_PAPERS = gql`
  query SearchPapers($query: String!, $filter: String!, $page: Int) {
    searchPapers(query: $query, sort: "relevance", filter: $filter, page: $page, enableDetectingYear: true, weightedSearchType: "c") {
      content {
        title
      }
    }
  }
`;

const SearchPage: NextPage = () => {
  const router = useRouter();
  const queryParams = router.query;

  const { data, loading, error } = useQuery(SEARCH_PAPERS, {
    variables: {
      query: queryParams.query,
      filter: queryParams.filter,
      page: 0,
    },
  });

  console.log(data, '=== data');

  return (
    <Layout>
      search page
      <div>list</div>
    </Layout>
  );
};

export default withApollo(SearchPage);
