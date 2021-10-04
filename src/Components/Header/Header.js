import React from 'react';
import './header.css'


const Header = () => {
    return (
<div class="hero-image">
  <div class="hero-text">
    <h1 style={{"font-size":"50px"}}>Welcome to my website</h1>
    <p>Let's explore website</p>
    <button>Details</button>
  </div>
</div>
    );
};

export default Header;