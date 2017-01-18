import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/VoteHomePage';
import CreatePoll from './components/CreatePollsPage';
import LoginPage from './components/LoginPage';
import ViewPolls from './components/ViewPollsPage';
import ProfilePage from './components/ProfilePage';
import PollPage from './components/PollPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="create" components={CreatePoll}/>
    <Route path="login" components={LoginPage}/>
    <Route path="view" components={ViewPolls}/>
    <Route path="profile" components={ProfilePage}/>
    <Route path="poll" components={PollPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
