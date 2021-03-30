import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import './styles/App.scss';

const App = () => (
  <div className="appContainer">
    <Router>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/portfolio" exact>
          <Home />
        </Route>

      </Switch>
    </Router>
  </div>
);

export default App;
