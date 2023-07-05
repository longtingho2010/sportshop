import React from "react";
import { allProducts } from "../../data";
import { useParams, Link } from "react-router-dom";
import "./CategoryPage.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const CategoryPage = () => {
  const { type } = useParams();

  const catItems = allProducts.filter((item) => item.category === type);

  return (
    <div className="categoryPage-container">
      <h1>
        {type.toUpperCase()} ({catItems.length})
      </h1>
      <div className="categoryPage-item-container">
        {catItems.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
