import React, { Component } from 'react';
import './Login.css';
import * as api from '../../api/logins';
import {Dialog,FormGroup,InputGroup,Button} from '@blueprintjs/core';
import PropTypes from 'prop-types';

const headers = new Headers({
  'Content-Type':'application/json'
});

class Login extends Component {
  state = {
    loginLoading: false,
    email: '',
    password: ''
  };


//   login = (e) => {
//     const { email, password }= this.state;
//     e.preventDefault();
//     // console.log(email, password)

// //   const response = await fetch('http://localhost:4000/api/login',{
// //     method: 'POST' ,
// //     headers,
// //     body: JSON.stringfy({ email, password})
// //   });
// //   const { token } = await response.json();
// //   document.cookie = ` token =${token}`;
// //   this.props.setLoggedInState()
// // }


login = (e) => {
  e.preventDefault();
  this.setState({ loginLoading: true });

  const { email, password } = this.state;
  const { completeLogin } = this.props;
  api.login(email, password)
    .then((res) => {
      // cookies.set('auth', res.token);
      delete res.token;
      // cookies.set('user', res);
      completeLogin();
    })
    .catch(error => console.error(error));
};
  setField = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    const { isLoding, email, password } = this.state;
    const { cancelLogin } = this.props;

    return (
      <Dialog
        isOpen
        onClose={cancelLogin}
        title="Log in"
        className="Login"
      >
        <div className="Login-body">
          <form onSubmit={this.login}>
            <FormGroup label="Email" labelFor="login-email">
              <InputGroup type="email" id="login-email" name="email" value={email} onChange={this.setField} required />
            </FormGroup>
            <FormGroup label="Password" labelFor="login_password">
              <InputGroup type="password" id="login-password" name="password" value={password} onChange={this.setField} required />
            </FormGroup>
            <Button type="submit" intent="primary" loading={isLoding}>Log in</Button>
          </form>
        </div>
      </Dialog>
    );
  }
}
Login.propTypes = {
  cancelLogin: PropTypes.func.isRequired,
  completeLogin: PropTypes.func.isRequired
};
export default Login;