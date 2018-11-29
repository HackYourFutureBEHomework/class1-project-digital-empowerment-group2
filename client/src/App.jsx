import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paths from './components/Paths';
import Modules from './components/Modules';
//import Modules from './components/Modules';

const App = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/:path(|paths|path|index)" component={Paths} /> 
      <Route path="/path/:pathId" component={Modules} />
      <Route render={() => <p>Page not found</p>} />
    </Switch>
  </BrowserRouter>
);

export default App;
