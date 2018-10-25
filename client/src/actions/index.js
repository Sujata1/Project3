// action types
export const APP_LOGIN = 'APP_LOGIN';

// action creators
export function appLogin(username) {
  return {type: APP_LOGIN, username};
}