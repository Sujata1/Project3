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
    // api call
  }
}

export function createUserRequest() {
  return {
    type: CREATEUSER_REQUEST,
    userCreationStatus: userCreationStatus.IN_PROGRESS
  }
}