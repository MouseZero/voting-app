
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './logginReducer';
import charts from './chartsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  login,
  charts
});

export default rootReducer;
