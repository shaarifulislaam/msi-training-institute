import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
    return (
      <div className="bg-dark container-fluid">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-10 col-md-8 col-12 my-5">
                <ul className="footer-text">
                    <li><Link className="text-white" href="#">Download Now</Link></li>
                    <li><Link className="text-white" href="#">License</Link></li>   
                    <li><Link className="text-white" href="#">Review</Link></li>   
                </ul>
                <ul className="footer-text">
                  <li> <Link className=" text-white" to="/about">About</Link></li>
                  <li><Link className="text-white" to="/services">Services</Link></li>
                  <li> <Link className=" text-white" to="/trainer">Trainer</Link></li>
                  <li><Link className="text-white" href="#">Privacy Policy</Link></li>
              </ul>
                <div>
                  <p className="text-white px-2 order-2 order-lg-1 order-md-1 "> © 2021 Shariful Islam All rights reserved</p>
                </div>
            </div>
         
            <div className="col-lg-2 col-12 col-md-4  my-5">
              <h4 className="text-white my-3 order-1 order-lg-2 order-md-2">Get the App</h4>
              <Link target="_blank" href="https://www.apple.com/app-store/"><img className="my-3 " src="https://i.ibb.co/8j2SFB5/App-Store-Badge.png" alt=""/></Link>
              <br/>
              <Link target="_blank" href="https://play.google.com/store/apps"><img src="https://i.ibb.co/TRzp92C/Google-Play-Badge.png" alt=""/></Link>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Footer;