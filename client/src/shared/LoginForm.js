import React, { Component} from 'react'; 


class LoginForm extends Component{

    Login = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.Login}>
                <label> Email:
                    <input type= 'email'   />
                </label    >
                <label> Password:
                    <input type= 'password'   />
                </label    >
                <input type= 'submit' value = 'Log In'/>


            </form>
        )
    }
}
export default LoginForm