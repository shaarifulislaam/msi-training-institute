import React from "react";

const About = () => {
  return (
    <div >
         <h1 className="text-center p-2 m-2">About Us</h1>
         <div className="container">
    <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
    
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active " data-interval="1000">
        <img
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFib3V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          className="d-block w-100 img-fluid"
          alt="..."
        />
      </div>
      <div className="carousel-item" data-interval="1000">
        <img
          src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWJvdXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          className="d-block w-100 img-fluid"
          alt="..."
        />
      </div>
      <div className="carousel-item" data-interval="1000">
        <img
          src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXQlMjB1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          className="d-block w-100 img-fluid"
          alt="..."
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
        <div className="row">
            <div className="col-md-6">
          <div className="p-4">
          <img src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2015/11/slider-2.jpg" className="img-fluid rounded-start" alt="..."/>
          </div>
            </div>
            <div className="col-md-6 p-4">
            <p>MSI Training Institute is the pioneer training institute to setup a bench mark in the industry. Our key principles includes maintaining the leading software solution provider, ensuring benefit of our clients, shareholders and employees, developing, disseminating and exploiting the remarkable experience, expertise and knowledge of all of our people and developing a distinctive competence in process development and project management</p>  
            </div>
        </div>
   </div>
     

  );
};

export default About;
