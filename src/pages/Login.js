import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const [blogData, setBlogData] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setBlogData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  };

  console.log(blogData);
  return (
    <form>
      <div className="container">
        <h1>LOGIN</h1>
        <div className="email">
          <p>Email</p>
          <input
            type="text"
            value={blogData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            value={blogData.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="check">
          <input type="checkbox" />

          <span>Remember Me</span>
        </div>
        <button className="button">LOGIN</button>
      </div>
    </form>
  );
};

export default Login;
