
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './stylesheets/styles.scss';

const App = () => {

  return (
    <Router>
      <div>
        <div id="navbar">
          <header>Hermes</header>
          <nav>
            <ul>
              <li>I</li>
              <li>am</li>
              <li>a</li>
              <li>navbar</li>
            </ul>
          </nav>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/newPath">
          </Route> */}
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
};



export default App;