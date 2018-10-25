import React from 'react';
import './Login.css';

const Login = props => {
  return (
    <section id='login'>
      <form>
        <input type='text' placeholder='User Email'></input>
        <input type='password' placeholder='Password'></input>
        <div>
          <span className='button'>Login</span>
          <span className='button'>Create Account</span>
        </div>
      </form>
    </section>
  )
}

export default Login;