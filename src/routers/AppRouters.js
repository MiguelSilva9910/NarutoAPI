import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import AboutPage from '../pages/AboutPage';
import Navbar from '../components/Navbar';

const AppRouters = () => (
    <BrowserRouter>
      <Fragment>
          <Navbar />
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={AboutPage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
  
  export default AppRouters;
