
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './logginReducer';
import charts from './chartsReducer';
import chart from './chartReducer';
import viewCharts from './viewCharts';

const rootReducer = combineReducers({
  routing: routerReducer,
  login,
  charts,
  chart,
  viewCharts
});

export default rootReducer;
