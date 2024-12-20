import React from "react";
import "../Assets/Css/AboutUs.css";
import Images from "../Assets/Image"

const AboutUs = () => {
  return (
  <div className="head-about">
    <div className='read-more'>
    <button className="btn order-bn">
      ORDER NOW
    </button>
  </div>
    <div className="about-us-container">
      <div className="about-left">
        <div className="about-step">
          <img src={Images.menu} alt="Pick A Dish" />
          <p>Pick A Dish</p>
        </div>
        <div className="about-step">
          <img src={Images.card} alt="Make A Payment" />
          <p>Make A Payment</p>
        </div>
        <div className="about-step">
          <img src={Images.enjoy} alt="Enjoy Your Food" />
          <p>Enjoy Your Food</p>
        </div>
      </div>
      <div className="about-right">
        <div className="about-image-wrapper">
          <img src={Images.stone} alt="About Us" className="about-image" />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Discover <strong>[TAKEAWAY NAME]</strong> located in{" "}
              <strong>[TAKEAWAY TOWN]</strong>, where passion for culinary
              craftsmanship meets the warmth of hospitality. Our story is one
              of dedication to the art of taste, where each dish is an
              expression of creativity and attention to detail. Indulge in the
              robust flavours of our pizzas, cooked to perfection, or experience
              the harmonious blend of ingredients in our exquisite burgers.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
