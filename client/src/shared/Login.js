import React, { Component} from 'react'; 
import { userLogIn }  from '../api/users';
import Cookies from "universal-cookie";




const cookies = new Cookies();

class Login extends Component{
    state = {
         
        email: '', 
        password: '', 
        invalid: false
    }

    Login = async (e) => {
        const {  email, password} = this.state;
        e.preventDefault();
        console.log( email, password)
        userLogIn(email, password)
        .then ( res =>{
            if (!res.token) return this.setState({invalid: true}) + alert('email or password not right' );
            cookies.set ('token', res.token);
            //window.location.reload();
            this.setState({
                email: '',
                password: ''
            })
        })
        
    }

    logout = () => {
        cookies.remove("token");
        window.location.reload();
    };


    setField = (e) =>{
        this.setState({ [e.currentTarget.name]: e.currentTarget.value});
    }

    render(){
        const {  email, password} = this.state;
        return(
            <form onSubmit={this.Login}>
                {/* <label> Name:
                    <input type= 'text'  
                    value = {name} name = 'name'
                    onChange = {this.setField} 
                    />
                </label    > */}
                <label> Email:
                    <input type= 'email'  
                    value = {email} name = 'email'
                    onChange = {this.setField} 
                    />
                </label    >
                <label> Password:
                    <input type= 'password'  
                     value= {password} name = 'password'
                    onChange = {this.setField}
                    />
                </label    >
                <input type= 'submit' value = 'Log In'/>


            </form>
        )
    }
}
export default Login