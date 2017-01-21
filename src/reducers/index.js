
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './logginReducer';
import charts from './chartsReducer';
import chart from './chartReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  login,
  charts,
  chart
});

export default rootReducer;
