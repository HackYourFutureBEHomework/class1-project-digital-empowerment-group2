import React from 'react';
import './AppHeader.css';
import { Link } from 'react-router-dom';



export default class AppHeader extends React.Component{
    state ={
        isLoging: false
    }

   
        
    render(){
        const {isLoging, }=this.state
        const {isLoggedIn}= this.props
            return(
                <div className= "app-header">
                    <div><h2>Digital Empowerment</h2></div>
                    <div className="line"></div>
                    <div className="nav">
                    <Link to="/paths" className="app-header-nav">Home</Link>
                    <Link to="/paths" className="app-header-nav">Paths</Link>
                    {!isLoggedIn && (<Link to="/Login" className="app-header-nav" >Log in</Link>)}
                    <Link to="/register" className="app-header-nav" >Register</Link>
                    </div>
                    
                </div>  
                
                
                
                )
   

    
    }
}
