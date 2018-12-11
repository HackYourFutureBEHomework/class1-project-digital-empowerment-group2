import React, { Component } from "react";
import './AppHeader.css';
import { Link } from 'react-router-dom';
import { Button } from "@blueprintjs/core";


class AppHeader extends Component {

    delete_cookie (token) {
        console.log(this.props)
        document.cookie = token + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.reload();
        return null;
        
      }
      

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

                      <Button className="app-header-nav" onClick={()=>this.delete_cookie("token")}>Log out</Button>
                     ) : (
                    <Link to="/login" className="app-header-nav" >Log in</Link>
                   )}

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
export default AppHeader;