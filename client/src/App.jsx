import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Modules from './components/Modules';
import Paths from './paths/Paths'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path=":path(|paths|path|index)" component={Paths} />
      {/* <Route path=":path(modules|)" component={Modules} /> */}
      {/* <Route  path="/path/:pathId" component={Modules} /> */}
      <Route render={() => <p>Page not found</p>} />
    </Switch>
  </BrowserRouter>
);

export default App;
