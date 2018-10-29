// action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_COMPLETE = 'LOGOUT_COMPLETE';

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
      let response = {
        ok: true,
        user: {
          name: 'HardCodedDummyResponse',
          idToken: 'TestIdToken'
        }
      };
      if(!response.ok) {
        dispatch(loginFail('User authentication failed.'))
      } else {
        localStorage.setItem('idToken', response.user.idToken);
        dispatch(loginSuccess(response.user));
      }
    }
  }
}

export function requestLogin(credentials) {
  return {
    type: LOGIN_REQUEST,
    credentials
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export function loginFail(msg) {
  return {
    type: LOGIN_FAIL,
    msg
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('idToken');
    dispatch(logoutComplete());
  }
}

export function logoutComplete() {
  return {
    type: LOGOUT_COMPLETE
  }
}