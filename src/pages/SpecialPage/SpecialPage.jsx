import React from "react";
import "./SpecialPage.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { allProducts } from "../../data";

const SpecialPage = () => {
  const specialItems = allProducts.filter((item) => item.special);

  return (
    <div className="categoryPage-container">
      <h1>SPECIAL ITEMS ({specialItems.length})</h1>
      <div className="categoryPage-item-container">
        {specialItems.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SpecialPage;
