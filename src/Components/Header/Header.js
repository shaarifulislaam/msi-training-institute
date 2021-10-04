import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
    return (
<div class="hero-image">
  <div class="hero-text">
    <h1 style={{"font-size":"50px"}}>Welcome to our website</h1>
    <p>Let's explore website</p>
    <Link to="/services">
    <button>Details</button>
    </Link>
  </div>
</div>
    );
};

export default Header;