import React, { Component } from 'react';
import './login.css';
import * as api from '../api/users'
import { Redirect,Link } from 'react-router-dom'

class Login extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    };

    login= async (e)=>{
        const {email,password}=this.state;
        e.preventDefault();
        const user = await api.login(email,password);
        
        const {token}=user
        document.cookie=`token=${token}`;
        this.props.setLoggedInState();
        // console.log( this.props.setLoggedInState())
        console.log(token)
        
        
    };

    handleChange=(e)=>{
       
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
     
    }


    render() {
        const{password, email}=this.state
        return (
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form onSubmit={this.login}>
                    <label className="loginLabels">
                    Email:
                        <input
                            className="form-item"
                            value={email}
                            placeholder="Username goes here..."
                            name="email"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="loginLabels">
                        Password
                        <input
                            className="form-item"
                            value={password}
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                    </label>
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    };

} ;
export default Login;