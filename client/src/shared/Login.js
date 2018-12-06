import React, { Component} from 'react'; 


class Login extends Component{

    Login = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.Login}>
                <label> Name:
                    <input type= 'text'   />
                </label    >
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
export default Login