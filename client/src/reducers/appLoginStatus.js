import {loginStatus} from '../actions/index';

const appLoginStatus = (state = loginStatus.LOGGED_OUT, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return loginStatus.LOGGED_IN;
    default:
      return state;
  }
}

export default appLoginStatus;