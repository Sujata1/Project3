import React from 'react';
import './Login.css';

class CreateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: '',
      confirmPasswordInput: ''
    }
  }

  render() {
    return (
      <section id='createAccount'>
        <div>Please enter your account information.</div>
        <form>
          <input type='text' placeholder='Email Address'
            value={this.state.emailInput}
            onChange={e => this.setState({emailInput: e.target.value})}>
          </input>
          <input type='password' placeholder='Password'
            value={this.state.passwordInput}
            onChange={e => this.setState({passwordInput: e.target.value})}>
          </input>
          <input type='password' placeholder='Confirm Password'
            value={this.state.confirmPasswordInput}
            onChange={e => this.setState({confirmPasswordInput: e.target.value})}>
          </input>
          <div className='button' onClick={e => this.props.createAccount(this.state)}>Create Your Account</div>
        </form>
      </section>
    )
  }
}

export default CreateAccount;