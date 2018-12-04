import React, { Component} from 'react'; 


class Login extends Component{

    onLogin = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.onLogin}>
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