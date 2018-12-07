import React from 'react'
import './Loader.css';

export default class Loader extends React.Component{
   render() {
      return <div id="loader-wrapper">
               <div className="lds-ellipsis"><div></div><div></div><div></div><div></div>
            </div>
               <p>Loading</p>
               <div id="loader">
               </div></div>;      
   } 
}