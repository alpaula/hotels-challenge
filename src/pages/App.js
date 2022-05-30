// Libs
import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Home from './Home';
import Reserves from './Reserves';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/reserves">
            <Reserves />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
