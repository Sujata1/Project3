import {combineReducers} from 'redux';
import userAuthentication from './userAuthentication';
import userCreation from './userCreation';
import search from './articleSearch';
import sources from './gotSources';

export default combineReducers({
  userAuthentication,
  userCreation,
  search,
  sources
})