// import React from 'react';
// import './AppHeader.css';
// import { Link } from 'react-router-dom';
// import {Navbar,Button} from '@blueprintjs/core';
// import Login from '../components/Login/Login';


// export default class AppHeader extends React.Component{
//     state = {
//         isLogin: false
//       };
    
//       LoginIN = () => {
//         this.setState({ isLogin: true });
//       }
    
//       cancelLogin = () => {
//         this.setState({ isLogin: false });
//       }
    
//       LogOut = () => {
//       }
    
//     render(){
//         const { isLogin } = this.state;
//         const { user } = this.props;
//             return(
//                 <Navbar className="app-header" fixedToTop>
//                     { isLogin
//                     && <Login cancelLogin={this.cancelLogin} completeLogin={this.cancelLogin} />
//                     }                    
//                     <div className= "app-header">
//                         <div><h2>Digital Empowerment</h2></div>
//                         <div className="line"></div>
//                         <div className="nav">
//                             <Link to="/" className="app-header-nav">Home</Link>
//                             <Link to="/paths" className="app-header-nav">Paths</Link>
//                             <Link to="/login" className="app-header-nav" >Log in</Link>
//                             {/* { user
//                                 ? <Button minimal text="Log out" onClick={this.LogOut} />
//                                 : <Button minimal text="Log in" onClick={this.LoginIN} />
//                             } */}
//                         </div>
//                     </div>
//                 </Navbar>               
//             );
//     }
// }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Button
} from '@blueprintjs/core';
import { cookies } from '../constants';
import Login from '../components/Login/Login';

import './AppHeader.css';

class Header extends Component {
  state = {
    isLoggingIn: false
  };

  startLogin = () => {
    this.setState({ isLoggingIn: true });
  }

  cancelLogin = () => {
    this.setState({ isLoggingIn: false });
  }

  doLogout = () => {
    cookies.remove('auth');
    cookies.remove('user');
  }

  render() {
    const { isLoggingIn } = this.state;
    const { user } = this.props;

    return (
      <Navbar className="app-header" fixedToTop>
        { isLoggingIn
          && <Login cancelLogin={this.cancelLogin} completeLogin={this.cancelLogin} />
        }
        <NavbarGroup align="left">
          <NavbarHeading>Digital Empowerment</NavbarHeading>
          <NavbarDivider />
          <Link to="/"><Button minimal icon="home" text="Home" /></Link>
          <Link to="/paths"><Button minimal icon="path-search" text="Paths" /></Link>
          { user
            ? <Button minimal icon="log-out" text="Log out" onClick={this.doLogout} />
            : <Button minimal icon="log-in" text="Log in" onClick={this.startLogin} />
          }
        </NavbarGroup>
      </Navbar>
    );
  }
}

Header.defaultProps = {
  user: null
};

Header.propTypes = {
  user: PropTypes.shape({})
};

export default Header;