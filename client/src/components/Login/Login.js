// import React, { Component } from 'react';
// import './Login.css';
// import * as api from '../../api/logins';
// import {Dialog,FormGroup,InputGroup,Button} from '@blueprintjs/core';

// const headers = new Headers({
//   'Content-Type':'application/json'
// });

// class Login extends Component {
//   state = {
//     loginLoading: false,
//     email: '',
//     password: ''
//   };


// //   login = (e) => {
// //     const { email, password }= this.state;
// //     e.preventDefault();
// //     // console.log(email, password)

// // //   const response = await fetch('http://localhost:4000/api/login',{
// // //     method: 'POST' ,
// // //     headers,
// // //     body: JSON.stringfy({ email, password})
// // //   });
// // //   const { token } = await response.json();
// // //   document.cookie = ` token =${token}`;
// // //   this.props.setLoggedInState()
// // // }


// login = (e) => {
//   e.preventDefault();
//   this.setState({ loginLoading: true });
//   const { email, password } = this.state;
//   const { completeLogin } = this.props;
//   api.login(email, password)
//     .then((res) => {
//       delete res.token;
//       completeLogin();
//     })
//     .catch(error => console.error(error));
// };

//   setField = (e) => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   }

//   render() {
//     const { isLoding, email, password } = this.state;
//     const { cancelLogin } = this.props;

//     return (
//       <Dialog
//         isOpen
//         onClose={cancelLogin}
//         title="Log in"
//         className="Login"
//       >
//         <div className="Login-body">
//           <form onSubmit={this.login}>
//             <FormGroup label="Email" labelFor="login-email">
//               <InputGroup type="email" id="login-email" name="email" value={email} onChange={this.setField} required />
//             </FormGroup>
//             <FormGroup label="Password" labelFor="login_password">
//               <InputGroup type="password" id="login-password" name="password" value={password} onChange={this.setField} required />
//             </FormGroup>
//             <Button type="submit" intent="primary" loading={isLoding}>Log in</Button>
//           </form>
//         </div>
//       </Dialog>
//     );
//   }
// }

// export default Login;


import React, { Component } from 'react';
import './Login.css';
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
                    <form>
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
     handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}
 export default Login; 