import React from 'react';
import './AppHeader.css';
import { Link } from 'react-router-dom';
import {Navbar,NavbarDivider,NavbarGroup,NavbarHeading,Button} from '@blueprintjs/core';
// import { cookies } from '../constants';
import Login from './Login';
import PropTypes from 'prop-types';

export default class AppHeader extends React.Component{
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
        // cookies.remove('auth');
        // cookies.remove('user');
      }
    
    render(){
        const { isLoggingIn } = this.state;
        const { user } = this.props;
            return(
                <Navbar className="app-header" fixedToTop>
                    { isLoggingIn
                    && <Login cancelLogin={this.cancelLogin} completeLogin={this.cancelLogin} />
                    }
                    
                <div className= "app-header">
                    <div><h2>Digital Empowerment</h2></div>
                    <div className="line"></div>
                    <div className="nav">
                    <Link to="/paths" className="app-header-nav">Home</Link>
                    <Link to="/paths" className="app-header-nav">Paths</Link>
                    <Link to="/" className="app-header-nav">Log in</Link>
                    { user
                        ? <Button minimal icon="log-out" text="Log out" onClick={this.doLogout} />
                        : <Button minimal icon="log-in" text="Log in" onClick={this.startLogin} />
                    }
                    </div>
                </div>
            </Navbar>               
            );
    }
}
AppHeader.defaultProps = {
    user: null
  };
  
  AppHeader.propTypes = {
    user: PropTypes.shape({})
  };
  