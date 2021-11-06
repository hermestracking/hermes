import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Track from './components/Track';
import List from './components/List';
import Detail from './components/Detail';
import Wing from './public/images/sprint.png'; 
import './stylesheets/styles.scss';

const App = () => {

  const [tracking, setTracking] = useState('');
  
  return (
    <Router>
      <div className="body-wrapper">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img className="wing-logo" src={Wing} />
            <h1 className="app-header">hermes</h1>
          </div>
        <div className="log-out-wrapper">
            <h3 className="log-out-button">Log Out</h3>
          </div>
        </div>
          <Track />
        <div className="card-container">
          <List />
          <Detail />
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