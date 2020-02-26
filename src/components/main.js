import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landing_page';
import About from './about_me';
import Resume from './resume';
import Contact from './contact'
import Projects from './projects'

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about_me" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />

  </Switch>
)

export default Main;
