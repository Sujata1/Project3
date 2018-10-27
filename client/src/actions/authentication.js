// action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginStatus = {
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT',
  IN_PROGRESS: 'IN_PROGRESS'
}

// action creators
export function loginUser(credentials) {
  // let config = {};

  return dispatch => {
    dispatch(requestLogin(credentials));

    //TEMP - will be API call to request authentication
    return apiCallStandin();

    function apiCallStandin() {
      let response = {ok: true};
      if(!response.ok) {
        dispatch(loginFail('This is an error message.'))
      } else {
        localStorage.setItem('idToken', 'idToken'); //user.id_token
        localStorage.setItem('accessToken', 'accessToken'); //user.access_token
        dispatch(loginSuccess('TestUser')); //user
      }
    }
  }
}

// TEMP

export function requestLogin(credentials) {
  return {
    type: LOGIN_REQUEST,
    loginStatus: loginStatus.IN_PROGRESS,
    credentials
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    loginStatus: loginStatus.LOGGED_IN,
    idToken: user.idToken
  }
}

export function loginFail(msg) {
  return {
    type: LOGIN_FAIL,
    loginStatus: loginStatus.LOGGED_OUT,
    msg
  }
}