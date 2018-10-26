import {loginStatus} from '../actions/index';

const initialState = {
  loginStatus: loginStatus.LOGGED_OUT
}

const appLogin = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_LOGIN':
      return Object.assign({}, state, {
        loginStatus: loginStatus.LOGGED_IN,
        username: action.username
      })
    default:
      return state;
  }
}

export default appLogin;