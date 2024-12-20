import React from 'react';
import '../Assets/Css/OurMenu.css';
import Images from "../Assets/Image"

const OurMenu = () => {
  return (
    <section className="our-menu ">
      <div className="contanier">
        <h2 className="our-menu-title">Our Menu</h2>
        <div className="mmnu">
          <p className="our-menu-description">
            Explore our delicious range of menu options below. Each item is a unique flavor profile designed to elevate your culinary journey. Let's embark on a distinctive gastronomic adventure together!
          </p>
        </div>
        <div className="menu-cards">
          <div className="menu-card rotate-left">
            <img src={Images.WrapImage} alt="Chicken Wrap" />
            <button className='wrpp'>
              <span className="menu-item-like">❤️</span>
              <p className="menu-item-name">Chicken Wrap</p>

            </button>

          </div>
          <div className="menu-card rotate-right">
            <img src={Images.WingsImage} alt="BBQ Wings" />
            <button className='wrpp'>
              <span className="menu-item-like">❤️</span>
              <p className="menu-item-name">BBQ Wings</p>

            </button>
          </div>
          <div className="menu-card rotate-left">
            <img src={Images.MilkshakeImage} alt="Milkshakes" />
            <button className='wrpp'>
              <span className="menu-item-like">❤️</span>
              <p className="menu-item-name">Milkshakes</p>

            </button>
          </div>
          <div className="menu-card rotate-right">
            <img src={Images.FriesImage} alt="nuggets" />
            <button className='wrpp'>
              <span className="menu-item-like">❤️</span>
              <p className="menu-item-name">nuggets</p>

            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
