import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { QuantityContext } from "../App/App";

const Product = ({ product, cart, setCart }) => {
  const { cartCount, setCartCount } = useContext(QuantityContext);
  const [heart, setHeart] = useState(false);
  let unlikedImgSrc =
    "https://img.icons8.com/material-outlined/24/000000/like--v1.png";

  let likedImgSrc = "https://img.icons8.com/windows/32/000000/filled-heart.png";

  const toggleHeart = () => {
    setHeart(!heart);
  };

  const addToCart = (product) => {

    //If product already exists in the cart or not.
    //If it exists, increment its quantity
    // else push that product
    //find method
    //find method will return the item which satisfies the condition.
    if (cart.find((item) => item.id === product.id)) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            //Increment the quantity
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return { ...item };

            //return object
          }
        })
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // cartCount = cartCount + 1
    setCartCount(cartCount + 1)

    //else push product in cart arr.
  };
  return (
    <>
      <div className="product flex justify-center align-center">
        <h2 className="center-text">{product.title}</h2>
        <img
          src={product.image}
          className="product-img justify-center"
          alt={product.title}
        />
        <p className="desc"> {product.description}</p>
        <div className="price">
          <div id="price">
            <p>&#163;{product.price}</p>
          </div>
        </div>
        <div className="extra-info flex">
          <span className="add-cart">
            <button type="button" onClick={() => addToCart(product)}>
              {" "}
              Add To Cart{" "}
            </button>
          </span>
          <span className="view-details">
            <button>
              {" "}
              <Link to={`/products/${product.id}`}> View Details </Link>
            </button>
          </span>
          <div className="heart">
            <img
              src={heart ? likedImgSrc : unlikedImgSrc}
              className="like-btn"
              onClick={() => toggleHeart()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
