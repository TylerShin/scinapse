import React from 'react';
import Layout from 'components/layout/layout';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { withApollo } from 'helpers/next-apollo';

const SearchPage: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  console.log(query, !query);

  return (
    <Layout>
      search page
      <div>list</div>
    </Layout>
  );
};

export default withApollo(SearchPage);
