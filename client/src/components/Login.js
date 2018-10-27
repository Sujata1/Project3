import React from 'react';
import {loginStatus} from '../actions/authentication';
import './Login.css';

class Login extends React.Component {
  render() {
    // TEMP
    console.log(this.props)
  
    return (
      <section id='login'>
        <form>
          <input type='text' placeholder='User Email'></input>
          <input type='password' placeholder='Password'></input>
          <div>
            <span className='button' onClick={this.props.loginUser}>Login</span>
            <span className='button'>Create Account</span>
          </div>
        </form>
        {this.props.loginStatus === loginStatus.LOGGED_IN &&
          <div className='msg'>Test user is logged in.</div>
        }
        {this.props.errorMsg &&
          <div className='msg'>{this.props.errorMsg}</div>
        }
      </section>
    )
  }
}

export default Login;