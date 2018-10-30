import {combineReducers} from 'redux';
import userAuthentication from './userAuthentication';
import userCreation from './userCreation';

export default combineReducers({
  userAuthentication
})