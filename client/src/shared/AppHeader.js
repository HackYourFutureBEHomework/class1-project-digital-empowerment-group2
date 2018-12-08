import React from 'react';
import './AppHeader.css';
import { Link } from 'react-router-dom';


export default class AppHeader extends React.Component{
    render(){
            return(
                <div className= "app-header">
                    <div><h2>Digital Empowerment</h2></div>
                    <div className="line"></div>
                    <div className="nav">
                    <Link to="/paths" className="app-header-nav">Home</Link>
                    <Link to="/paths" className="app-header-nav">Paths</Link>
                    <Link to="/login" className="app-header-nav" >Log in</Link>
                    <Link to="/logout" className="app-header-nav" >Log out</Link>

                    </div>
                </div>               
            )
    }
}
