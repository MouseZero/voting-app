
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './logginReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  login
});

export default rootReducer;