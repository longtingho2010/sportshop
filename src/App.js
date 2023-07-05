import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SexPage from "./pages/SexPage/SexPage";
import SpecialPage from "./pages/SpecialPage/SpecialPage";
import SexItemPage from "./pages/SexItemPage/SexItemPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:type" element={<CategoryPage />} />
        <Route path="genres/:menu" element={<SexPage />} />
        <Route path="genres/:menu/:categories" element={<SexItemPage />} />
        <Route path="genres/specialitems" element={<SpecialPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="shoppingcart" element={<ShoppingCartPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
