import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartCount } from "../../Redux/features/slices/cartSlice";
import { filterSearch } from "../../Redux/features/slices/productSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const cartCount = useSelector(selectCartCount);

  const searchProducts = (e) => {
    setSearchTerm(e.target.value);
    dispatch(filterSearch(e.target.value));
  };

  return (
    <nav className="mavBar flex flex-between">
      <div className="logo">
        <h2 className="nav-title">Kiran's Klothing</h2>
      </div>

      <ul className="nav-item flex flex-evenly">
        <li className="nav-link">
          <Link to="/"> Home</Link>
        </li>

        <li className="nav-link">
          <Link to="/contact"> Contact Us</Link>
        </li>
      </ul>
      <div className="search">
        <input
          className="search_bar"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => searchProducts(e)}
        />
      </div>
      <button style={{ position: "relative" }} className="nav-link cart-btn">
        <Link to="/cart">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
            style={{ width: 30, height: 30 }}
          />
          {cartCount > 0 ? (
            <span className="cart-count"> {cartCount} </span>
          ) : null}
        </Link>
      </button>
      <div>
        <button type="button">Register</button>

        <button type="button">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
