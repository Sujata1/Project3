import {connect} from 'react-redux';
import Login from '../components/Login';
import {loginUser} from '../actions';

const mapStateToProps = state => {
  return {
    loggedIn: state.loginStatus === 'LOGGED_IN',
    username: state.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => {
      console.log('login');
      dispatch(loginUser('Mark'));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);