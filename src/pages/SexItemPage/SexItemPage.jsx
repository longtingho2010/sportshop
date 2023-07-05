import React from "react";
import "./SexItemPage.css";
import { allProducts } from "../../data";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

const SexItemPage = () => {
  const { menu, categories } = useParams();

  const sexItems = allProducts.filter((item) => item.sex.includes(menu));
  const sexGenresItems = sexItems.filter(
    (item) => item.category === categories
  );

  return (
    <div className="categoryPage-container">
      <h1>
        {menu.toUpperCase()}'S {categories.toUpperCase()}
      </h1>
      <div className="categoryPage-item-container">
        {sexGenresItems.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SexItemPage;
