import React from 'react';
import './AppHeader.css';
import { Link } from 'react-router-dom';
import {Navbar,Button} from '@blueprintjs/core';
import Login from '../components/Login/Login';


export default class AppHeader extends React.Component{
    state = {
        isLogin: false
      };
    
      LoginIN = () => {
        this.setState({ isLogin: true });
      }
    
      cancelLogin = () => {
        this.setState({ isLogin: false });
      }
    
      LogOut = () => {
      }
    
    render(){
        const { isLogin } = this.state;
        const { user } = this.props;
            return(
                <Navbar className="app-header" fixedToTop>
                    { isLogin
                    && <Login cancelLogin={this.cancelLogin} completeLogin={this.cancelLogin} />
                    }                    
                    <div className= "app-header">
                        <div><h2>Digital Empowerment</h2></div>
                        <div className="line"></div>
                        <div className="nav">
                            <Link to="/" className="app-header-nav">Home</Link>
                            <Link to="/paths" className="app-header-nav">Paths</Link>
                            <Link to="/login" className="app-header-nav" >Log in</Link>
                            {/* { user
                                ? <Button minimal text="Log out" onClick={this.LogOut} />
                                : <Button minimal text="Log in" onClick={this.LoginIN} />
                            } */}
                        </div>
                    </div>
                </Navbar>               
            );
    }
}
