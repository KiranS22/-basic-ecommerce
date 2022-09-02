import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./details.css";

function ProductDetails({ products }) {
  console.log(products);
  const [required, setRequired] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setRequired(products.find((product) => product.id === Number(id)));
  }, []);

  return (
    <div>
      <div className="card-wrapper">
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={required.image} alt={required.title} />
              </div>
            </div>
          </div>

          <div className="product-content">
            <h2 className="product-title">{required.title}</h2>
            <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>
                {required.rating ? required.rating.rate : "Not Found"} (
                {required.rating ? required.rating.count : "Not Found"})
              </span>
            </div>

            <div className="product-price">
              <p className="new-price">
                <span>&#163;{required.price}</span>
              </p>
            </div>

            <div className="product-detail">
              <h2>about this item: </h2>
              <p>{required.description}</p>
              <ul>
                <li>{required.category}</li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              <input type="number" min="0" value="1" />
              <button type="button" className="btn">
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
