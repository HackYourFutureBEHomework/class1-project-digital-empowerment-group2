import React, { Component } from 'react';
import * as api from '../../api/users';

 class  Login extends Component {
    state = {
        loginLoading: false,
        email:'',
        password:''
    };

    login = (e) => {
        e.preventDefault();
        this.setState({ loginLoading: true });
    
        const { email, password } = this.state;
        const { completeLogin } = this.props;
        api.login(email, password)
          .then((res) => {
            delete res.token;
            completeLogin();
          })
          .catch(error => console.error(error));
      };
    //  login = (e) => {
    //     const { email, password } = this.state;
    //     e.preventDefault();
    //     // console.log(email, password);

    //     const response = await fetch('http:// localhost:4000/api/login', {
    //         method: 'POST',
    //         headers,
    //         body: JSON.stringify({ email, password })
    //     });
    //     const user = await response.json();
    //     console.log(user);
    //  }

     setField = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
      }

      render() {
         const { email, password } = this.state;
          return (
            <form onSubmit={ this.login}>
                <label>
                  Email:
                  <input type="email" value={email} name="email" onChange={this.setField}/>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} name="password" onChange={this.setField}/>
                </label>
                <input type="submit" value="log in"/>
            </form>
          )
      }
 }
 export default Login;