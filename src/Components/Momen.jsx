import React from 'react';
import '../Assets/Css/Moment.css';
import Imaages from "../Assets/Image"

const Moment = () => {
  return (
    <div className="moment-section">
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-6 col-md-6 col-sm-12 moment-left">
          <div className="pad">
            <img 
              src={Imaages.pad} 
              className="pad-image" 
              alt="Savour the moment clipboard" 
            />
            <div className="pad-content">
              <h1 className="pad-title">SAVOUR THE MOMENT<br />WITH <br/> EVERY BITE</h1>
              {/* <button className="order-now-btn">ORDER NOW</button> */}
              <p className="pad-title round mt-1">ORDER NOW</p>
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="col-lg-6 col-md-6 col-sm-12 moment-right">
          <div className="burger-in-hand">
            <img 
              src={Imaages.bur} 
              className="burger-image" 
              alt="Burger in hand" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moment;
