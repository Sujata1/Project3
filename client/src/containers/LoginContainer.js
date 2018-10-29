import {connect} from 'react-redux';
import Login from '../components/Login';
import {loginUser} from '../actions/authentication';

const mapStateToProps = state => {
  const {userAuthentication} = state;
  const {loginStatus, errorMsg} = userAuthentication;

  return {
    loginStatus,
    errorMsg
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (componentState) => {
      if(componentState.usernameInput && componentState.passwordInput) {
        dispatch(loginUser({
          username: componentState.usernameInput, 
          password: componentState.passwordInput
        }));
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);