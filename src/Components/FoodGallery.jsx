import React from "react";
import "../Assets/Css/FoodGallery.css"
import Images from "../Assets/Image"

const FoodGallery = () => {
    const foodItems = [
        {
            id: 1,
            text: "CHICKEN NUGGETS",
            image: Images.FriesImage,
            position: "left",
        },
        {
            id: 2,
            text: "JACKET POTATOES",
            image: Images.potatoe,
            position: "right",
        },
        {
            id: 3,
            text: "GARLIC BREAD",
            image: Images.bread,
            position: "left",
        },
        {
            id: 4,
            text: "FUDGE CAKE",
            image: Images.cake,
            position: "right",
        },
    ];
    return (
        <div className="container">
            <div className="row gallery-whole">
                {foodItems.map((item) => (
                    <div className="col-lg-6 col-md-6  col-sm-6 food-card" key={item.id}>
                        <div className="food-image inde">
                            {item.position === "left" && (
                                <span className="food-text food-text-left">{item.text}</span>
                            )}
                            <img
                                src={item.image}
                                alt={item.text}
                                className="food-image"
                            />
                            {item.position === "right" && (
                                <span className="food-text food-text-right">{item.text}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default FoodGallery;
