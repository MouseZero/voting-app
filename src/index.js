/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/voteStyle.scss';

render(
  <Provider>
    <Router routes={routes} />
  </Provider>, document.getElementById('app')
);
