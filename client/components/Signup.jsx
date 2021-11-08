import axios from 'axios';
import React, { useState } from 'react';
import { stringify } from 'uuid';

const Signup = (props) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    token: undefined,
    address: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    },
    trackingNumbers: undefined
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id.includes('address.')) {
      const period = id.indexOf('.');
      const key = id.slice(period + 1);
      const address = userDetails.address;
      address[key] = value;
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        address: address,
      }))
    } else setUserDetails((prevdetails) => ({
      ...prevdetails,
      [id]: value,
    }));
    // console.log(e.target.id);
    console.log(userDetails);
  };
  const handleSignupClick = (e) => {
    console.log('Deets', userDetails);
    // axios('user/signup', {
    //   method: 'POST',
    //   data: userDetails,
    // })
    //   .then(res => {
    //     console.log(res.data);
    //   })
  }

  return(
    <React.Fragment>
      <div className="signup-page-wrapper">
        <h2 className="signup-header">Nice to meet you!</h2>
        <div className="signup-page-left">
          <div className="signup-name-wrapper">
          <i class="far fa-user signup-user-icon"></i>
            <input
              id="name"
              className="signup-name-field"
              type="text"
              placeholder="Full name"
              value={userDetails.name}
              onChange={handleChange}
            />
          </div>
          <div className="signup-line"></div>
          <div className="email-signup-wrapper">
            <i class="far fa-envelope signup-email-icon"></i>
            <input
              id="email"
              className="signup-email-field"
              type="email"
              placeholder="Email address"
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
          <div className="signup-line"></div>
          <div className="signup-password-wrapper">
            <i class="fas fa-lock signup-lock-icon"></i>
            <input
              id="password"
              className="signup-password-field"
              type="password"
              placeholder="Password"
              value={userDetails.password}
              onChange={handleChange}
            />
          </div>
          <div className="signup-line"></div>
            <div className="signup-address1-wrapper">
              <i class="far fa-address-card signup-address-icon"></i>
              <input
                id="address.address1"
                className="signup-address1-field"
                type="text"
                placeholder="Street and number (e.g. 123 Eazy Street)"
                value={userDetails.address.address1}
                onChange={handleChange}
              />
            </div>
          <div className="signup-line"></div>
        </div>
        <div className="signup-page-right">
          <div className="signup-address2-wrapper">
            <i class="far fa-address-card signup-address-icon"></i>
            <input
              id="address.address2"
              classname="signup-address2-field"
              type="text"
              placeholder="Optional: additional info (e.g. Apt 1)"
              value={userDetails.address.address2}
              onChange={handleChange}
            />
          </div> 
          <div className="signup-line"></div>
          <div className="signup-city-wrapper"> 
            <i class="far fa-map signup-map-icon"></i>
            <input
              id="address.city"
              className="signup-address-city-field"
              type="text"
              placeholder="City (e.g. New Orleans)"
              value={userDetails.address.city}
              onChange={handleChange}
            />
          </div>
          <div className="signup-line"></div>
          <div className="signup-state-wrapper">
            <i class="far fa-map signup-map-icon"></i>
            <input
              id="address.state"
              classname="signup-address-state-field"
              type="text"
              placeholder="State (e.g. LA)"
              value={userDetails.address.state}
              onChange={handleChange}
            />
          </div>
          <div className="signup-line"></div>
          <div className="signup-zip-wrapper signup-zip-icon">
            <i class="fas fa-map-marker-alt"></i>
            <input
              id="address.zip"
              className="signup-address-zip-field"
              type="text"
              placeholder="Zip (e.g. 12345)"
              value={userDetails.address.zip}
              onChange={handleChange}
            />
          </div>
          <div className="signup-line"></div>
          <button type="sumbit" className="signup-button" onClick={handleSignupClick}>
            Register
          </button>
        </div>
        
      </div>
    </React.Fragment>
  )
}

export default Signup;