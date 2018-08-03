import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ChirpIndexContainer from './chirps/chirp_index_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <Route path="/chirps" component={ChirpIndexContainer} />
    <Route path="/login" component={LogInContainer} />
    <AuthRoute path="/signup" component={SignUpContainer} />
    <ProtectedRoute path="/chirps" component={ChirpIndexContainer} />
  </div>
);
