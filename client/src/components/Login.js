import React from 'react';
import './Login.css';

const Login = props => {
  console.log(props)
  let message = '';
  if(props.loggedIn) {message = `${props.username} is logged in.`};

  return (
    <section id='login'>
      <form>
        <input type='text' placeholder='User Email'></input>
        <input type='password' placeholder='Password'></input>
        <div>
          <span className='button' onClick={props.loginUser}>Login</span>
          <span className='button'>Create Account</span>
        </div>
      </form>
      <div className='msg'>{message}</div>
    </section>
  )
}

export default Login;