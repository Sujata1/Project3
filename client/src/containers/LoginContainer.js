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
    loginUser: (e) => {
      console.log('click handled')
      dispatch(loginUser({username: 'testcredentials', password: 'test'}));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);