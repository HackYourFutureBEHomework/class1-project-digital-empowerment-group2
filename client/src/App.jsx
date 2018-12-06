// import React, { Component} from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Paths from './components/Paths/Paths';
// import Modules from './components/Modules/Modules';
// import Login from './components/Login/Login'


// class App extends Component {
//   constructor(){
//     super();
//      const getCookie = (cookiename) => {
//        const cookiestraing = RegExp(""+cookiename+"[^;]+").exec(document.cookie);
//        return decodeURIComponent(!!cookiestraing ? cookiestraing.toString().replace(/^[^=]+./,""):"");
//      }
//      const token = getCookie('token');
//      this.state = {
//        loggedId: !!token
//      }
//     console.log(getCookie('token'));
//   }
//   state = { 
//     loggedIn : false
//   }
//   stetLoggedInState = () => {
//      this.setState({ loggedIn : true});
//   } 
  
//   render() {
//     const { user } = this.state;
//     // const { loggedIn } = this.state;
//     console.log(user);
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/:path(|paths|path|index)" component={Paths} />  
//           <Route path="/path/:pathId" component={Modules} />
//           <Route path="/login" component={Login}/>
//            {/* <Route path="/login" render= { () => < Login stetLoggedInState={this.stetLoggedInState} />}/> */}
//           <Route render={() => <p>Page not found</p>} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FocusStyleManager } from '@blueprintjs/core';
import { cookies } from './constants';
import Paths from './components/Paths/Paths';
import Modules from './components/Modules/Modules';
import NotFound from './components/404/404';

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
  constructor() {
    super();
    const user = cookies.get('user');
    this.state = {
      user: user || null
    };
    cookies.addChangeListener(this.authStateChanged);
  }

  authStateChanged = (cookie) => {
    if (!cookie || cookie.name !== 'user') return;
    // user logged out
    if (!cookie.value) {
      this.setState({ user: null });
      return;
    }
    const user = JSON.parse(cookie.value);
    this.setState({ user: user || null });
  }

  render() {
    const { user } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/:path(|paths|path|index)" render={props => <Paths {...props} user={user} />} />
          <Route path="/path/:pathId" user={user} render={props => <Modules {...props} user={user} />} />
          <Route component={NotFound} user={user} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
