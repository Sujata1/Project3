import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import {logout} from '../actions/authentication';

const mapStateToProps = state => {
  console.log(state);
  const isLoggedIn = state.userAuthentication.loginStatus === 'LOGGED_IN';
  if(isLoggedIn && state.userAuthentication.currentUser) {
    return {
      isLoggedIn,
      currentUser: state.userAuthentication.currentUser
    };
  }
  return {isLoggedIn};
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);