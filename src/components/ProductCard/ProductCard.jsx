import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link className="categoryPage-item" to={`/product/${item.id}`}>
      <div>
        <div className="categoryPage-item-img">
          <img alt="" src={item.img} />
        </div>
        <div className="categoryPage-item-info">
          <span style={{ width: "75%" }}>{item.title}</span>
          <span>$ {item.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
