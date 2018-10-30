import {
  userCreationStatus, CREATEUSER_REQUEST, CREATEUSER_SUCCESS, CREATEUSER_FAIL
} from '../actions/createUser';

const userCreation = (state = {
  userCreationStatus: userCreationStatus.NONE
}, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default userCreation;