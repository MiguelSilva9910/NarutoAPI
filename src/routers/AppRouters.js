import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import QuotesList from '../pages/QuotesList';
import Navbar from '../components/Navbar';

const AppRouters = () => (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/quoteslist" component={QuotesList} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
  
  export default AppRouters;
