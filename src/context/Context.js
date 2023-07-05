import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { cartReducer } from "./Reducers";
import { allProducts } from "../data";

const Cart = createContext();
const Context = ({ children }) => {
  const [totalCartItems, setTotalCartItems] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, {
    products: allProducts,
    cart: [],
  });

  useEffect(() => {
    setTotalCartItems(state.cart.reduce((acc, cur) => acc + cur.qty, 0));
  }, [state.cart]);

  return (
    <Cart.Provider value={{ state, dispatch, totalCartItems }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
