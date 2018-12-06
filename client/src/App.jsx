import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paths from   './components/Paths/Paths';
import Modules from './components/Modules/Modules';
import Login from   './shared/Login';
import NotFound from './components/404/404';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:path(|paths|path|index)" component={Paths} />  
      <Route path="/path/:pathId" component={Modules} />
      <Route path="/login" component={Login}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
