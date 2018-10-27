import React from 'react';
import {Redirect} from 'react-router-dom';
import {loginStatus} from '../actions/authentication';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginUser = this.props.loginUser.bind(this);
  }
  render() {
    // TEMP
    console.log(this.props)
  
    return (
      <section id='login'>
        <form>
          <input type='text' placeholder='User Email'></input>
          <input type='password' placeholder='Password'></input>
          <div>
            <span className='button' onClick={this.loginUser}>Login</span>
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