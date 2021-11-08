import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Track from "./components/Track";
import List from "./components/List";
import Detail from "./components/Detail";
import Wing from "./public/images/sprint.png";
import { v4 as uuidv4 } from "uuid";
import "./stylesheets/styles.scss";
import Calendar from "./components/Calendar";

const App = () => {
  const [tracking, setTracking] = useState("");
  const [shipments, setShipments] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [navBtnText, setNavBtnText] = useState("");
  const [navBtnLink, setNavBtnLink] = useState("");

  const colorArr = ["#986b53", "#f50422", "#983f7a", "#ea24a3"];
  console.log(shipments);

  const handleTrack = (tracking) => {
    const body = { tracking };
    // console.log(body);
    fetch("http://localhost:8080/api/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        data.id = uuidv4();
        // console.log(data);
        setSelectedItem({});
        data.color = colorArr[Math.floor(Math.random() * colorArr.length)];
        setShipments([...shipments, data]);
      });
  };

  const handleNavBtnClick = () => {
    if (navBtnLink === "/login") setIsUserAuthenticated(false);
  };

  return (
    <Router>
      <div className="body-wrapper">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img className="wing-logo" src={Wing} />
            <h1 className="app-header">hermes</h1>
          </div>
          <div className="log-out-wrapper">
            <h3 className="log-out-button">
              <Link to={navBtnLink} onClick={handleNavBtnClick}>
                {navBtnText}
              </Link>
            </h3>
          </div>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {isUserAuthenticated ? (
              <Redirect from="/" to="/home" />
            ) : (
              <Redirect from="/" to="/login" />
            )}
          </Route>
          <Route path="/login">
            {isUserAuthenticated ? (
              <Redirect from="/login" to="/" />
            ) : (
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                isUserAuthenticated={isUserAuthenticated}
                setIsUserAuthenticated={setIsUserAuthenticated}
                navBtnLink={navBtnLink}
                setNavBtnLink={setNavBtnLink}
                navBtnText={navBtnText}
                setNavBtnText={setNavBtnText}
              />
            )}
          </Route>
          <Route path="/signup">
            {isUserRegistered ? (
              <Redirect from="/signup" to="/login" />
            ) : (
              <Signup
                isUserRegistered={isUserRegistered}
                setIsUserRegistered={setIsUserRegistered}
                navBtnLink={navBtnLink}
                setNavBtnLink={setNavBtnLink}
                navBtnText={navBtnText}
                setNavBtnText={setNavBtnText}
              />
            )}
          </Route>
          <Route path="/home">
            <Home
              tracking={tracking}
              setTracking={setTracking}
              handleTrack={handleTrack}
              shipments={shipments}
              setShipments={setShipments}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
              navBtnLink={navBtnLink}
              setNavBtnLink={setNavBtnLink}
              navBtnText={navBtnText}
              setNavBtnText={setNavBtnText}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = ({
  tracking,
  setTracking,
  handleTrack,
  shipments,
  setShipments,
  setSelectedItem,
  selectedItem,
  navBtnLink,
  setNavBtnLink,
  navBtnText,
  setNavBtnText,
  currentUser,
  setCurrentUser,
} = props) => {
  console.log('The current user is:  ', currentUser);
  useEffect(() => {
    setNavBtnText("Log Out");
    setNavBtnLink("/login");
  }, []);

  useEffect(() => {
    console.log('refreshing user data!')
    fetch('/user')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCurrentUser(data)
        if (currentUser.tracking && currentUser.tracking.length > 0)
        setShipments([currentUser.tracking])
      })
  }, [])

  useEffect(() => {
    fetch('/user/updateTracking', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: currentUser.email, tracking: shipments})
    })
  }, [shipments])



  return (
    <React.Fragment>
      <Track
        tracking={tracking}
        setTracking={setTracking}
        handleTrack={handleTrack}
      />
      <div className="card-container">
        <List
          shipments={shipments}
          setShipments={setShipments}
          setSelectedItem={setSelectedItem}
        />
        <Detail selectedItem={selectedItem} shipments={shipments} />
      </div>
      <div className="calendar-container">
        <Calendar shipments={shipments} />
      </div>
    </React.Fragment>
  );
};

export default App;
