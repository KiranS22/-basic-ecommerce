import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../../Redux/features/slices/productSlice";
import Product from './../Products/Product'
const Home = () => {
  const products = useSelector(selectFilteredProducts)
  return (
    <div>
      <div className="home-container grid justify-center align-center">
        {products.map((product) => {
          return <Product product={product}  />;
        })}
      </div>
    </div>
  );
};

export default Home;
