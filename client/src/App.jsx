import React ,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paths from   './components/Paths/Paths';
import Modules from './components/Modules/Modules';
import Login from   './shared/Login';
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
          <Route exact path="/:path(|paths|path|index)"  render={()=><Paths isloggedIn={loggedIn}/>}  />  
          <Route path="/path/:pathId" component={Modules} />
          <Route path="/login" render={()=><Login setLoggedInState={this.setLoggedInState}/>}/>
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </BrowserRouter>
    )
}
}
export default App;
