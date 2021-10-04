import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
    return (
        <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>&copy; 2021 "Programming Hero" All rights reserved.</p>
            </div>
            <div class="col-md-6">
              <p>Design & Development : <Link target="_blank" to="https://google.com/"> Shariful Islam</Link></p>
            </div>
              
               
          </div>
        </div>
      </div>
  
    );
};

export default Footer;