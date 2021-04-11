import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';

import './styles/App.scss';

const App = () => (
  <div className="appContainer">
    <Router>
      <Header />
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/oferta" exact>
          <Home />
        </Route>

        <Route path="/o-nas" exact>
          <Home />
        </Route>

        <Route path="/kontakt" exact>
          <Home />
        </Route>

        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>

      </Switch>
    </Router>
  </div>
);

export default App;
