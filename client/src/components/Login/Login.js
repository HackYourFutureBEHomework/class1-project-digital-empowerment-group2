import React, { Component } from 'react';
import { Dialog,FormGroup,InputGroup } from '@blueprintjs/core';
import * as api from '../../api/users';
import './Login.css';

class Login extends Component {
  state = {
    // loginLoading: false,
    email: '',
    password: ''
  };

  login = (e) => {
    e.preventDefault();
    this.setState({ loginLoading: true });

    const { email, password } = this.state;
    api.login(email, password)
      .catch(error => console.error(error));
  };

  setField = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    const { email, password } = this.state;
    const { cancelLogin } = this.props;

    return (
      <Dialog
        isOpen
        onClose={cancelLogin}
        title="Log in"
        className="dialog"
      >
        <div className="bp3-dialog-body">
          <form onSubmit={this.login}>
            <FormGroup label="Email" labelFor="login-email">
              <InputGroup type="email" id="login-email" name="email" value={email} onChange={this.setField} required />
            </FormGroup>
            <FormGroup label="Password" labelFor="login-password">
              <InputGroup type="password" name="password" value={password} onChange={this.setField} required />
            </FormGroup>
            <button  className='login__button' type="submit" intent="primary">Log in</button>
          </form>
        </div>
      </Dialog>
    );
  }
}
export default Login;