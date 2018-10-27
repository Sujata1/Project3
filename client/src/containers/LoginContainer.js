import {connect} from 'react-redux';
import Login from '../components/Login';
import {loginUser} from '../actions';

const mapStateToProps = state => {
  return {
    loggedIn: state.appLoginStatus === 'LOGGED_IN',
    username: state.appLoginUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (e) => {
      console.log('click handled')
      dispatch(loginUser('Mark'));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);