import React, { useEffect, useState } from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const Services = () => {
    const [services , setServices] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 ">
        {
            services.slice(4).map(service => <ServicesDetails
            key={service.id}
            service={service}
            ></ServicesDetails>)
        }
      </div>
    );
};

export default Services;