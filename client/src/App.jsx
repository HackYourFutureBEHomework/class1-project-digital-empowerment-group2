import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paths from './components/Paths/Paths';
import Modules from './components/Modules/Modules';
import Login from './shared/Login';
import register from './shared/register'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:path(|paths|path|index)" component={Paths} />  
      <Route path="/path/:pathId" component={Modules} />
      <Route path="/Login" component={Login} />
      <Route path="/register" component={register} />
      <Route render={() => <p>Page not found</p>} />
    </Switch>
  </BrowserRouter>
);

export default App;
