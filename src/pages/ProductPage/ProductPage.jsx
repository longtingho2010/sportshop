import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import "./ProductPage.css";
import { Discount, ShoppingCart } from "@mui/icons-material";
import { CartState } from "../../context/Context";

const ProductPage = () => {
  const { productId } = useParams();
  // const [sSelected, setSSelected] = useState(false);
  // const [mSelected, setMSelected] = useState(false);
  // const [lSelected, setLSelected] = useState(false);
  // const [xlSelected, setXLSelected] = useState(false);
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log("cart", cart);

  // const handleClickS = (e) => {
  //   e.preventDefault();
  //   setSSelected(true);
  //   setMSelected(false);
  //   setLSelected(false);
  //   setXLSelected(false);
  // };
  // const handleClickM = (e) => {
  //   e.preventDefault();
  //   setSSelected(false);
  //   setMSelected(true);
  //   setLSelected(false);
  //   setXLSelected(false);
  // };
  // const handleClickL = (e) => {
  //   e.preventDefault();
  //   setSSelected(false);
  //   setMSelected(false);
  //   setLSelected(true);
  //   setXLSelected(false);
  // };
  // const handleClickXL = (e) => {
  //   e.preventDefault();
  //   setSSelected(false);
  //   setMSelected(false);
  //   setLSelected(false);
  //   setXLSelected(true);
  // };

  const product = allProducts.filter((item) => item.id == productId);

  return (
    <div className="productpage-container">
      <div className="productpage-content">
        <div className="productpage-img-container">
          <img alt="" src={product[0].img} />
        </div>
        <div className="productpage-info-container">
          <h1>{product[0].title}</h1>
          <p
            style={{
              fontSize: "18px",
              color: "orange",
              textDecoration: "underline",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Discount style={{ marginRight: "10px" }} />
            Extra 20% off on 2+ selected discounted items. Selected full-priced
            items can join the bundle
          </p>
          <p style={{ fontSize: "20px", marginBottom: "40px" }}>
            {product[0].des}
          </p>
          <p style={{ fontSize: "30px" }}>
            <b>HKD$</b> {product[0].price}
          </p>

          {/* <p>CHOOSE SIZE</p> */}
          {/* <div className="size-btn">
            <button
              onClick={handleClickS}
              className={sSelected ? "selected" : ""}
            >
              S
            </button>
            <button
              onClick={handleClickM}
              className={mSelected ? "selected" : ""}
            >
              M
            </button>
            <button
              onClick={handleClickL}
              className={lSelected ? "selected" : ""}
            >
              L
            </button>
            <button
              onClick={handleClickXL}
              className={xlSelected ? "selected" : ""}
            >
              XL
            </button>
          </div> */}
          <div>
            {/* <div className="productpage-amount-container">
                <button onClick={delQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={addQuantity}>+</button>
              </div> */}
            <button
              className="add-btn"
              onClick={() =>
                dispatch({
                  type: "add_to_cart",
                  payload: product[0],
                })
              }
            >
              <span>ADD TO CART</span>
              <ShoppingCart style={{ fontSize: 25 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
