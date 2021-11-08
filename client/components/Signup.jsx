import axios from 'axios';
import React from 'react';
import { stringify } from 'uuid';

const Signup = (props) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    token: null,
    address: {
      address1: '',
      address2: null,
      city: '',
      state: '',
      zip: null
    },
    trackingNumbers: null
  });
  const handleChange = (e) => {
    const { type, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [type]: value,
    }));
  };
  const handleSignupClick = (e) => {
    console.log('Deets', userDetails);
    axios('user/signup', {
      method: 'POST',
      data: userDetails,
    })
      .then(res => {
        console.log(res.data);
      })
  }

  return(
    <div className="singup-page-wrapper">
      <input
        type="name"
        placeholder="Full name"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email address"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <input
        type="address.address1"
        placeholder="Street and number (e.g. 123 Eazy Street)"
        value={credentials.password}
        onChange={handleChange}
      />
      <input
        type="address.address2"
        placeholder="Optional: additional info (e.g. Apt 1)"
        value={credentials.password}
        onChange={handleChange}
      />
      <input
        type="address.city"
        placeholder="City (e.g. New Orleans)"
        value={credentials.password}
        onChange={handleChange}
      />
      <input
        type="address.state"
        placeholder="State (e.g. LA)"
        value={credentials.password}
        onChange={handleChange}
      />
      <input
        type="address.zip"
        placeholder="Zip (e.g. 12345)"
        value={credentials.password}
        onChange={handleChange}
      />
      <button type="sumbit" className="login-button" onClick={handleLoginClick}>
        Signup
      </button>
    </div>
  )
}

export default Signup;