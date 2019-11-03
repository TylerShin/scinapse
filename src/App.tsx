import React, { FC } from 'react';
import Router from './router';
import 'styles/index.scss';
import { hot } from 'react-hot-loader/root';

const App: FC = () => {
  return <Router />;
};

export default hot(App);
