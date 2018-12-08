import React, { Component } from "react";
import './Home.css';

class Home extends Component{
   
    render(){
       return(
        <div>
        <h1 className = 'hobo'> Welcome to HOBO VZW</h1>
        <div className = 'list'>
        <ul className = 'contact'> 
           <h3> Contact </h3>
            <li> Adres : Kogelstraat 24, 1000 Brussel</li>
            <li> Telefoon: 02/514.26.93 </li>
            <li >Fax:  02/502.39.73</li>
            <li> Email : hobo@cawbrussel.be</li>

        </ul>
        <ul className =' uren '>
        <h3> Openingsuren</h3>

        <li>Maandag: 13u-17u</li>
        <li>Dinsdag-Woensdag-Donderdag: 9u-17u</li>
        <li>Vrijdag: 9u-16u</li>
        </ul>
        </div>

        </div>
        
       )
   }
}
export default Home;