import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import ProductDetails from "../Products/ProductDetails";
import axios from "axios";
import { useEffect, useState, createContext } from "react";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { fetchProducts} from "../../Redux/features/slices/productSlice";

export const QuantityContext = createContext();
function App() {
 
;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetails/>}
          />
          <Route
            path="/cart"
            element={<Cart/>}
          />
        </Routes>
    </Router>
  );
}

export default App;
