// action types
export const LOGIN_USER = 'LOGIN_USER';

export const loginStatus = {
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT'
}

// action creators
export function loginUser(username) {
  return {type: LOGIN_USER, username};
}