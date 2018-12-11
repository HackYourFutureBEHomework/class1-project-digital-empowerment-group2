import React, { Component } from 'react';
import './login.css';
import * as api from '../api/users'
import { Dialog,FormGroup,InputGroup } from '@blueprintjs/core';
import { withRouter } from 'react-router-dom';



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
        this.props.history.push('/');
    };

    handleChange=(e)=>{       
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { email, password } = this.state;
        const { cancelLogin } = this.props;
    
        return (
          <Dialog
            isOpen
            onClose={cancelLogin}
            title="Login"
            className="dialog"
          >
           <div className="bp3-dialog-body">
          <form onSubmit={this.login}>
            <FormGroup label="Email" labelFor="login-email">
              <InputGroup type="email" id="login-email" name="email" value={email} onChange={this.handleChange} required  />
            </FormGroup>
            <FormGroup label="Password" labelFor="login-password">
              <InputGroup type="password" name="password" value={password} onChange={this.handleChange} required />
            </FormGroup>
            <button  className='login__button' type="submit" intent="primary">Login</button>
          </form>
        </div>
      </Dialog>
    );
  }

} ;
export default withRouter(Login);