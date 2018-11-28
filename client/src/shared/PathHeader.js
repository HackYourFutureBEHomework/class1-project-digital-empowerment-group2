import React from 'react';
import './PathHeader.css';

export default class AppHeader extends React.Component{
    render(){
            return(
                <div className= "path-header">
                    <div className="path-header__logo">PATHS</div>
                    <div className="path-bar">
                    </div>
                </div>
            )
    }
}