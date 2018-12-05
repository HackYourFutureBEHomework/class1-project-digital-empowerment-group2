import React, { Component } from 'react';
import './login.css';
import * as api from '../api/users';

class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form onSubmit={this.login}>
                        <input
                            className="form-item"
                            placeholder="Username goes here..."
                            name="username"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

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
      setField = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
      }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;