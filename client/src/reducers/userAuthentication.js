import {loginStatus, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_COMPLETE} from '../actions/authentication';

const userAuthentication = 
  (state = {loginStatus: localStorage.getItem('idToken') ? 
    loginStatus.LOGGED_IN: loginStatus.LOGGED_OUT}, action) => {
      switch(action.type) {
        case LOGIN_REQUEST:
          return Object.assign({}, state, {
            loginStatus: loginStatus.IN_PROGRESS
          });
        case LOGIN_SUCCESS:
        console.log(action)
          return Object.assign({}, state, {
            loginStatus: loginStatus.LOGGED_IN,
            currentUser: action.user.name
          })
        case LOGIN_FAIL:
          return Object.assign({}, state, {
            loginStatus: loginStatus.LOGGED_OUT,
            errorMsg: action.msg
          })
        case LOGOUT_REQUEST: 
          return Object.assign({}, state, {
            loginStatus: loginStatus.IN_PROGRESS
          })
        case LOGOUT_COMPLETE:
          return Object.assign({}, state, {
            loginStatus: loginStatus.LOGGED_OUT,
            currentUser: null
          })
        default:
          return state;
      }
}

export default userAuthentication;