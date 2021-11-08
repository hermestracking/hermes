import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Box from '../public/images/box.png';
import axios from 'axios';

const Login = ({
  currentUser,
  setCurrentUser,
  isUserAuthenticated,
  setIsUserAuthenticated,
  navBtnLink,
  setNavBtnLink,
  navBtnText,
  setNavBtnText,
} = props) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { type, value } = e.target;
    setCredentials((prevCreds) => ({
      ...prevCreds,
      [type]: value,
    }));
  };

  const handleLoginClick = (e) => {
    console.log('Credentials', credentials);
    axios('/user/signin', {
      method: 'POST',
      data: credentials,
    })
      .then((res) => {
        console.log(res.data);
        const { userFound, userVerified, user } = res.data;
        if (userFound && userVerified) {
          console.log('Success! Logged in');
          setCurrentUser(user);
          setIsUserAuthenticated(true);
          // console.log(currentUser);
        } else {
          console.log("Username and password don't match...");
          // TODO: user notification to the effect of this console log
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsUserAuthenticated(false);
    setNavBtnText('Sign Up');
    setNavBtnLink('/signup');
  }, [])

  return (
    <div className="login-page-wrapper">
      <div className="field-wrapper">
        <div className="user-container">
          <i className="far fa-user user-icon"></i>
          <input
            className="username-field"
            type="email"
            placeholder="Enter your e-mail address"
            value={credentials.email}
            onChange={handleChange}
          />
          <div className="user-line"></div>
        </div>
        <div className="password-container">
          <i className="fas fa-lock password-icon"></i>
          <input
            className="password-field"
            type="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
          />
          <div className="password-line"></div>
        </div>
        <button type="sumbit" className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
      <div className="box-wrapper">
        <img className="box bounce" src={Box} />
      </div>
    </div>
  );
};

export default Login;
