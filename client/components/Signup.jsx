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
    <div className="singup-page-wrapper">
      <input
        id="name"
        type="text"
        placeholder="Full name"
        value={userDetails.name}
        onChange={handleChange}
      />
      <input
        id="email"
        type="email"
        placeholder="Email address"
        value={userDetails.email}
        onChange={handleChange}
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        value={userDetails.password}
        onChange={handleChange}
      />
      <input
        id="address.address1"
        placeholder="Street and number (e.g. 123 Eazy Street)"
        value={userDetails.address.address1}
        onChange={handleChange}
      />
      <input
        id="address.address2"
        placeholder="Optional: additional info (e.g. Apt 1)"
        value={userDetails.address.address2}
        onChange={handleChange}
      />
      <input
        id="address.city"
        placeholder="City (e.g. New Orleans)"
        value={userDetails.address.city}
        onChange={handleChange}
      />
      <input
        id="address.state"
        placeholder="State (e.g. LA)"
        value={userDetails.address.state}
        onChange={handleChange}
      />
      <input
        id="address.zip"
        placeholder="Zip (e.g. 12345)"
        value={userDetails.address.zip}
        onChange={handleChange}
      />
      <button type="sumbit" className="login-button" onClick={handleSignupClick}>
        Signup
      </button>
    </div>
  )
}

export default Signup;