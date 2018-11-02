import {combineReducers} from 'redux';
import userAuthentication from './userAuthentication';
import userCreation from './userCreation';
import search from './articleSearch'

export default combineReducers({
  userAuthentication,
  userCreation,
  search
})