import {combineReducers} from 'redux';
import appLoginStatus from './appLoginStatus';
import appLoginUser from './appLoginUser'

export default combineReducers({
  appLoginStatus,
  appLoginUser
})