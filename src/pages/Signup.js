import React, { useState } from 'react';
import './Login.css';
const Signup = () => {
  const [signUpdata, setsignupdata] = useState({
    email: '',
    password: '',
    confirmpassword: ''
  });

  const handleChange = e => {
    setsignupdata(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  };

  console.log(signUpdata);

  return (
    <form>
      <div className="container">
        <h1>SIGN UP</h1>
        <div className="email">
          <p>Email</p>
          <input
            type="password"
            value={signUpdata.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            value={signUpdata.password}
            onChange={handleChange}
            name="password"
          />
        </div>

        <div className="password">
          <p>Confirm Password</p>
          <input
            type="password"
            value={signUpdata.confirmpassword}
            onChange={handleChange}
            name="confirmpassword"
          />
        </div>

        <button className="button">SIGN UP</button>
      </div>
    </form>
  );
};

export default Signup;
