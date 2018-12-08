import React from 'react';
import './AppHeader.css';
import { Link } from 'react-router-dom';
import Login from './Login';

export default class AppHeader extends React.Component{
    state = {
        isLoggingIn: false
      };
    

    render(){
        const { isLoggingIn } = this.state;
            return(
                <div className= "app-header">
                { isLoggingIn
          && <Login cancelLogin={this.cancelLogin} completeLogin={this.completeLogin} />
        }
                    <div><h2>Digital Empowerment</h2></div>
                    <div className="line"></div>
                    <div className="nav">
                    <Link to="/" className="app-header-nav">Home</Link>
                    <Link to="/paths" className="app-header-nav">Paths</Link>
                    <Link to="/login" className="app-header-nav" >Log in</Link>
                    <Link to="/logout" className="app-header-nav" >Log out</Link>

                    </div>
                </div>               
            )
    }
}
