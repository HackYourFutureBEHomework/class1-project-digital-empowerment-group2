import React ,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paths from   './components/Paths/Paths';
import Modules from './components/Modules/Modules';
import Login from   './shared/Login';
import NotFound from './components/404/404';


class App extends Component { 
  constructor (props){
  super(props);
   
  const getCookie=(cookiename)=>{ 
  
  const cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
  }

const token = getCookie('token');
console.log(token)
  

  this.state={
    loggedIn: !!token
  }
}

  setLoggedInState=()=>{
    this.setState({loggedIn : true})
  }
  render(){
    const{loggedIn}=this.state
    console.log(loggedIn)
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/:path(|paths|path|index)"  render={props => <Paths {...props} isloggedIn={loggedIn}/>}  />  
          <Route path="/path/:pathId" render={props => <Modules {...props} isloggedIn={loggedIn} />} />
          <Route path="/login" render={()=><Login setLoggedInState={this.setLoggedInState}/>}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
