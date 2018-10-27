import {loginStatus, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/authentication';

const userAuthentication = 
  (state = {loginStatus: localStorage.getItem('idToken') ? true: false}, action) => {
    switch(action.type) {
      case LOGIN_REQUEST:
        return Object.assign({}, state, {
          loginStatus: loginStatus.IN_PROGRESS,
          user: action.credentials
        });
      case LOGIN_SUCCESS:
        return Object.assign({}, state, {
          loginStatus: loginStatus.LOGGED_IN,
          errorMsg: action.msg
        })
        case LOGIN_FAIL:
          return Object.assign({}, state, {
            loginStatus: loginStatus.LOGGED_OUT,
            errorMsg: action.msg
          })
      default:
        return state;
    }
}

export default userAuthentication;