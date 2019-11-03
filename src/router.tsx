import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { FC } from 'react';
import Home from './pages/home/home';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
