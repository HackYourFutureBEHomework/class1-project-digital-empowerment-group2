import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paths from './components/Paths/Paths';
import Modules from './components/Modules/Modules';
import Login from './shared/Login';
import Home from './shared/Home';

//import Cookies from 'universal-cookie';


//const cookies = new Cookies();

class App extends Component {
  constructor(){
    super();
      const getCookie=(cookiename)=>{ 
  
      const cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
      return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
      }
    
    const token = getCookie('token');
    console.log(token)


    this.state = {
      isLoggedIn: !! token,
    }
    //console.log(document.cookie)
  }
  setLoggedInState = () =>{
    this.setState ({
      isLoggedIn: true

    })
  }
  render (){
    const { isLoggedIn } = this.state;
    return (
      <BrowserRouter>
    <Switch>
      <Route exact path="/:path(|paths|path|index)" 
      render ={ props => <Paths {...props} isLoggedIn={isLoggedIn}/>}
      //component={Paths} 
      />  
      <Route path="/path/:pathId" 
      render={props => <Modules {...props} isLoggedIn={isLoggedIn} />}
      //component={Modules}
       />
      <Route path="/Login" render={() => <Login setLoggedInState={this.setLoggedInState}/>}
      //component={Login} 
      />
       <Route path="/Home" component={Home}  
       //render={() => <Login setLoggedInState={this.setLoggedInState}/>}
      
      />
      
      <Route render={() => <p>Page not found</p>} />
    </Switch>
  </BrowserRouter>
    )
  }
}




export default App;
