import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import About from '../About/About';
import Header from '../Header/Header';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import Trainer from '../Trainer/Trainer';

const Home = () => {
    const [sr , setSr] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setSr(data))
    },[])
  
    return (
        <div >
            <Header></Header>
          <div className="m-4 text-center">
              <h1>Services</h1>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {sr.slice(0,4).map(service => <ServicesDetails
            key={sr.id}
            service={service}
            ></ServicesDetails>)}
            </div>
          </div>
            <About></About>
            <Trainer></Trainer>
        </div>
    );
};

export default Home;