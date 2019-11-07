import React from 'react';
import { NextPage } from 'next';
import { withApollo } from 'helpers/next-apollo';
import Experiment from 'components/experiment';

const PaperShow: NextPage<{}, null> = () => {
  return (
    <div>
      <Experiment />
    </div>
  );
};

PaperShow.getInitialProps = async () => {
  return null;
};

export default withApollo(PaperShow);
