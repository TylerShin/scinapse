import React from 'react';
import Layout from 'components/layout/layout';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { withApollo } from 'helpers/next-apollo';
import { parseFilter } from 'helpers/parseFilter';

const SearchPage: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const filter = parseFilter(query.filter as string | undefined);

  console.log(`query: ${JSON.stringify(query, null, 2)}`);
  console.log(`filter: ${JSON.stringify(filter, null, 2)}`);

  return (
    <Layout>
      search page
      <div>list</div>
    </Layout>
  );
};

export default withApollo(SearchPage);
