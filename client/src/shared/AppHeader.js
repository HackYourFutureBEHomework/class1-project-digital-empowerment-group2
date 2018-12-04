import React from 'react';
import './AppHeader.css';
import { Link } from 'react-router-dom';
import Loging from 'Login'


export default class AppHeader extends React.Component{
    state ={
        isLoging: false
    }


    render(){
        const {isLoging}=this.state
            return(
                <div className= "app-header">
                    <div><h2>Digital Empowerment</h2></div>
                    <div className="line"></div>
                    <div className="nav">
                    <Link to="/paths" className="app-header-nav">Home</Link>
                    <Link to="/paths" className="app-header-nav">Paths</Link>
                    <button onClick= {this.onLogin}>Log in</button>
                    </div>
                </div>  
                
                )
                onLogin = ()=> {
                    this.setState({isLoging: true})
                  }
    }
}
