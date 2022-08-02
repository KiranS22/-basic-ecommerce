import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/features/slices/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(false);
  let unlikedImgSrc =
    "https://img.icons8.com/material-outlined/24/000000/like--v1.png";

  let likedImgSrc = "https://img.icons8.com/windows/32/000000/filled-heart.png";

  const toggleHeart = () => {
    setHeart(!heart);
  };

  const addingToCart = (product) => {
    dispatch(addToCart(product));
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
            <button type="button" onClick={() => addingToCart(product)}>
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
