import React, { Component } from "react";
import './AppHeader.css';
import { Link } from 'react-router-dom';
// import Login from './Login';

export default class AppHeader extends Component {
    render(){
        const { isloggedIn } = this.props;
            return(
                <div className= "app-header">
                    <div><h2>Digital Empowerment</h2></div>
                    <div className="line"></div>
                    <div className="nav">
                    <Link to="/" className="app-header-nav">Home</Link>
                    <Link to="/paths" className="app-header-nav">Paths</Link>
                    {isloggedIn ? (
                      <Link to="/logout" className="app-header-nav" >Log out</Link>
                     ) : (
                    <Link to="/login" className="app-header-nav" >Log in</Link>
                   )}
                    {/* <Login isloggedIn={isloggedIn} /> */}
                    </div>
                    <div className='logo-hobo'>
                        <h1>
                            <span>H</span>
                            <span>o</span>
                            <span className='B'>B</span>
                            <span>O</span>
                            <span className='B'>.</span>
                            <span>b</span>
                            <span>e</span>
                            <span></span>
                        </h1>
                    </div>
                </div>               
            )
    }
}
