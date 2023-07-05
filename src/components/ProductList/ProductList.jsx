import React from "react";
import Product from "../Product/Product";
import { popularProducts } from "../../data";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>POPULAR ITEMS</h1>
      <div className="productList-container">
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
