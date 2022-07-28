import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../Redux/features/slices/cartSlice";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const cartCount = useSelector(selectCartCount);
  console.log("I a cart count", cartCount);

  const searchProducts = (e) => {
    setSearchTerm(e.target.value);
    // setFilteredProducts(products.filter(item => item.includes(e.target.value)))
    //   setFilteredProducts(
    //     products.filter((item) =>
    //       item.title.toLowerCase().includes(e.target.value)
    //     )
    //   );
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
          <span className="cart-count"> {cartCount} </span>
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
