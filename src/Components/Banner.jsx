import React from 'react'
import Images from "../Assets/Image"
import "../Assets/Css/Banner.css"

const Banner = () => {
  return (
    <div className="banner-container row ">
      <div className="banner-item  col-lg-6 col-md-6 col-sm-6">
        <img src={Images.burger} alt="Burger" className="banner-image " />
        <div className="banner-text">BURGER</div>
      </div>
      <div className="banner-item  col-lg-6 col-md-6 col-sm-6">
        <img src={Images.pizza} alt="Pizza" className="banner-image " />
        <div className="banner-text">PIZZA</div>
      </div>
    
    </div>
  );
};

export default Banner