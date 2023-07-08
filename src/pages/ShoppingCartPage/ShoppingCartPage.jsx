import React, { useState, useEffect } from "react";
import "./ShoppingCartPage.css";
import { allProducts } from "../../data";
import { Add, Delete, Remove } from "@mui/icons-material";
import { CartState } from "../../context/Context";

const ShoppingCartPage = () => {
  const {
    totalCartItems,
    state: { cart },
    dispatch,
  } = CartState();
  console.log("cart2", cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0));
  }, [cart]);
  return (
    <div>
      <div className="shoppingCartPage-container">
        <h1>YOUR CART({totalCartItems})</h1>
        <div className="shoppingCartPage-content">
          <div className="shoppingCartPage-content-info">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  className="shoppingCartPage--product-container"
                  key={item.id}
                >
                  <div className="shoppingCartPage--product">
                    <img alt="" src={item.img} />
                    <div className="shoppingCartPage--product-details">
                      <span>
                        <b>Product: </b>
                        {item.title}
                      </span>
                      <span>
                        <b>ID: </b>
                        {item.id}
                      </span>
                      <span>
                        <b>Size: </b>M
                      </span>
                    </div>
                  </div>
                  <div className="shoppingCartPage--product-price">
                    <div className="shoppingCartPage--product-price-content">
                      <span>
                        <b>Quantity:</b>{" "}
                      </span>
                      <Add
                        sx={{ fontSize: { xs: 14, sm: 16, md: 20 } }}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "add_qty",
                            payload: item,
                          })
                        }
                      />
                      <span className="quantity">{item.qty}</span>
                      <Remove
                        sx={{ fontSize: { xs: 14, sm: 16, md: 20 } }}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "dec_qty",
                            payload: item,
                          })
                        }
                      />
                    </div>
                    <div className="price">HKD$ {item.price}</div>
                  </div>
                  <div>
                    <Delete
                      sx={{ fontSize: { xs: 22, sm: 24, md: 30, lg: 35 } }}
                      onClick={() =>
                        dispatch({
                          type: "remove_from_cart",
                          payload: item,
                        })
                      }
                      // style={{ fontSize: 35 }}
                      className="del-btn"
                    />
                  </div>
                </div>
              ))
            ) : (
              <h1 style={{ textAlign: "center", padding: "50px" }}>
                Your Cart Is Empty
              </h1>
            )}
          </div>
          <div className="shoppingCartPage-content-sum">
            <h1>ORDER SUMMARY</h1>
            <div className="sum-content">
              <span>Shipping Fee: </span>
              <span>$30</span>
            </div>
            <div className="sum-content">
              <span>Shipping Discount: </span>
              <span>-$30</span>
            </div>
            <div className="sum-content sum-total">
              <span>Total: </span>
              <span>${total}</span>
            </div>
            <button>CHEUK OUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
