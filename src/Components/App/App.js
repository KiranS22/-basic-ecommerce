import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import ProductDetails from "../Products/ProductDetails";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  selectFilteredProducts,
} from "../../Redux/features/slices/productSlice";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const selectProducts = useSelector(selectFilteredProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:id"
          element={<ProductDetails products={selectProducts} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
