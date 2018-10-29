import React from 'react';
import {Redirect} from 'react-router-dom';
import {loginStatus} from '../actions/authentication';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '', 
      passwordInput: ''
    }
    this.loginUser = this.props.loginUser.bind(this);
  }
  render() {
    return (
      <section id='login'>
        <form>
          <input type='text' placeholder='User Email' 
            value={this.state.usernameInput}
            onChange={e => this.setState({usernameInput: e.target.value})}>
          </input>
          <input type='password' placeholder='Password' 
            value={this.state.passwordInput}
            onChange={e => this.setState({passwordInput: e.target.value})}>
          </input>
          <div>
            <span className='button' onClick={e => this.loginUser(this.state)}>Login</span>
            <span className='button'>Create Account</span>
          </div>
        </form>
        {this.props.loginStatus === loginStatus.LOGGED_IN &&
          <Redirect to='/home' />
        }
        {this.props.errorMsg &&
          <div className='msg'>{this.props.errorMsg}</div>
        }
      </section>
    )
  }
}

export default Login;