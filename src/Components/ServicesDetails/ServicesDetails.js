import React from 'react';
import './servicesDetails.css'

const ServicesDetails = (props) => {
    const {name , img , price} = props.service;
    return (
        <div className="col px-4">
        <div className="card h-100">
       <div className="img-container p-2 text-center">
       <img src={img} className="card-img-top " alt="..."/>
       </div>
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5 >Price : ${price}</h5>
          </div>
          <div className="card-footer bg-white border-0">
          <button className="btn btn-primary text-center w-100">Enroll Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServicesDetails;