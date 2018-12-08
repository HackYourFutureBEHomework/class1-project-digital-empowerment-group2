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
        const user = await userLogIn(email, password);
        const {token}=user
        document.cookie=`token=${token}`;
        this.props.setLoggedInState();
        
        console.log(token)

           
    }

    // logout = () => {
    //     cookies.remove("token");
    //     window.location.reload();
    // };


    setField = (e) =>{
        this.setState({ [e.currentTarget.name]: e.currentTarget.value});
    }

    render(){
        const {  email, password} = this.state;
        return(
            <form onSubmit={this.Login}>
             
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