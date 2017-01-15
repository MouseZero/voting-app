import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/VoteHomePage';
import CreatePoll from './components/CreatePollsPage';
import LoginPage from './components/LoginPage';
import ViewPolls from './components/ViewPollsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="create" components={CreatePoll}/>
    <Route path="login" components={LoginPage}/>
    <Route path="view" components={ViewPolls}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
