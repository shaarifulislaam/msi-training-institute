import React from 'react';

const Trainer = () => {
    return (
       <div>
           <h1 className="text-center m-4">Our Honerable Trainer</h1>
            <div className="row mx-3">
          <div className="col-md-3 img-container">
              <img className="img-fluid" src="https://i.ibb.co/TM3kDzS/etty-fidele-VNYCIb-Zju0o-unsplash.jpg" alt="" />
              <h4 className="my-2">John Do</h4>
              <p>Web Designer</p>
          </div> 
          <div className="col-md-3 img-container">
              <img src="https://i.ibb.co/0MpT9FG/photo-1519085360753-af0119f7cbe7.jpg" alt="" />
              <h4 className="my-2">Can Yame</h4>
              <p>Contenet Writer </p>
          </div> 
          <div className="col-md-3 img-container">
              <img src="https://i.ibb.co/qyJBZRW/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg" alt="" />
              <h4 className="my-2">Anan Alaf</h4>
              <p>Graphics Designer </p>
          </div>
          <div className="col-md-3 img-container">
              <img src="https://i.ibb.co/6FZLWjk/austin-distel-7uo-Mmz-Pd2-JA-unsplash.jpg" alt="" />
              <h4 className="my-2">Richa Rida</h4>
              <p>Digital Marketer </p>
          </div> 
        </div>
       </div>
    );
};
export default Trainer;