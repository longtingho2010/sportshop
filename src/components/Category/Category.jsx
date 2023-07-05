import { categories } from "../../data";
import React from "react";
import "./Category.css";
import CategoryCard from "../CategoryCard/CategoryCard";

const Category = () => {
  return (
    <div className="category-container">
      {categories.map((item) => (
        <CategoryCard item={item} />
      ))}
    </div>
  );
};

export default Category;
