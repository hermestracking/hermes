import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({
  currentUser,
  setCurrentUser,
  isUserAuthenticated,
  setIsUserAuthenticated,
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

  return (
    <div className="login-page-wrapper">
      <input
        type="email"
        placeholder="Enter your e-mail address"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button type="sumbit" className="login-button" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
