const appLoginUser = (state = '_public', action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return action.username;
    default:
      return state;
  }
}

export default appLoginUser;