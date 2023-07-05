import React from "react";
import "./Product.css";
import { Search, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="product-container">
      <img alt="" src={item.img} />
      <div className="product-info-container">
        <div className="info-icon">
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={`/product/${item.id}`}
          >
            <ShoppingCart />
          </Link>
        </div>
        <div className="info-icon">
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={`/product/${item.id}`}
          >
            <Search />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
