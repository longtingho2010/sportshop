import React from "react";
import "./SexPage.css";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { allProducts } from "../../data";

const SexPage = () => {
  const { menu } = useParams();

  const sexItems = allProducts.filter((item) => item.sex.includes(menu));

  return (
    <div className="categoryPage-container">
      <h1>
        {menu.toUpperCase()}'S ALL PRODUCTS ({sexItems.length})
      </h1>
      <div className="categoryPage-item-container">
        {sexItems.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SexPage;
