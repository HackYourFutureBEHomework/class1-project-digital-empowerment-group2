import React, { Component} from 'react'; 
import { userRegister }  from '../api/users';
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
//import history from "../../history";




//const cookies = new Cookies();

class register extends Component{
    state = {
        name: '', 
        email: '', 
        password: '', 
        invalid: false
    }

    register = async (e) => {
        const { name, email, password} = this.state;
        //e.preventDefault();
        console.log(name, email, password)
        userRegister(name, email, password)
        // .then ( res =>{
        //     if (!res.token) return this.setState({invalid: true}) + alert('email or password not right' );
        //     cookies.set ('token', res.token);
        //     window.location.reload();
            this.setState({
                email: '',
                password: ''
            })
            alert('you are registered');
       // })
        
    }

    


    setField = (e) =>{
        this.setState({ [e.currentTarget.name]: e.currentTarget.value});
    }

    render(){
        const { name, email, password} = this.state;
        return(
            <div>
            <form onSubmit={this.register}>
                <label> Name:
                    <input type= 'text'  
                    value = {name} name = 'name'
                    onChange = {this.setField} 
                    />
                </label    >
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
                <input type= 'submit' value = 'Register'/>


            </form>
            {/* <Link to={`/paths/${path._id}`} > </Link> */}
            </div>
        )
    }
}
export default register