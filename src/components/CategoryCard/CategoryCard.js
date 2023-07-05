import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {
  return (
    <div className="categoryCard-container">
      <img alt="" src={item.img} />
      <div className="categoryCard-info-container">
        <h1>{item.title}</h1>
        <Link to={`category/${item.category}`}>
          <button>Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
