import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="Nav-container">
      <h1>BLOG APP</h1>
      <Link to="/home">
        <h4>HOME</h4>
      </Link>
      <Link to="/post">
        <h4>POST</h4>
      </Link>
      <Link to="/login">
        <h4>LOGIN</h4>
      </Link>
      <Link to="/signup">
        <h4>SIGN UP</h4>
      </Link>
      <h4>LOGOUT</h4>
    </div>
  );
}
