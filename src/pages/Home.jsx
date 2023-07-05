import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Category from "../components/Category/Category";
import ProductList from "../components/ProductList/ProductList";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <ProductList />
      <Newsletter />
    </div>
  );
};

export default Home;
