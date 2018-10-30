// action types
export const CREATEUSER_REQUEST = 'CREATEUSER_REQUEST';
export const CREATEUSER_SUCCESS = 'CREATEUSER_SUCCESS';
export const CREATEUSER_FAIL = 'CREATEUSER_FAIL';

export const userCreationStatus = {
  NONE: 'NONE',
  IN_PROGRESS: 'IN_PROGRESS',
  USER_CREATED: 'USER_CREATED',
  FAILED: 'FAILED'
}

// action creators
export function createUser(containerState) {
  return dispatch => {
    dispatch(createUserRequest());
    fetch('/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        email: containerState.emailInput,
        password: containerState.passwordInput
      })
    }).then(response => {
      if(response.ok) {
        response.json().then(data => {
          if(data.err) {
            dispatch(createUserFail(data.err))
          } else {
            dispatch(createUserSuccess());
          }
        })
      }
    })
  }
}

export function createUserRequest() {
  return {
    type: CREATEUSER_REQUEST,
    userCreationStatus: userCreationStatus.IN_PROGRESS
  }
}

export function createUserFail(msg) {
  return {
    type: CREATEUSER_FAIL,
    msg
  }
}

export function createUserSuccess() {
  return {
    type: CREATEUSER_SUCCESS
  }
}