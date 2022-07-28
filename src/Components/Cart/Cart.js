import React, { useEffect, useState } from "react";
import CartItem from "../Cart-Item/CartItem";
import { useSelector } from "react-redux";
import {
  selectCart,
  selectCartCount,
} from "../../Redux/features/slices/cartSlice";

const Cart = () => {
  const cart = useSelector(selectCart);
  console.log("I am cart being recived from selector ", cart);

  const cartCount = useSelector(selectCartCount);

  useEffect(() => {
    // findcartTotal();
  }, []);
  // const findcartTotal = () => {
  //   let cartTotal = 0;
  //   //Run a Loop.
  //   cart.forEach((element) => {
  //     cartTotal += element.price * element.quantity;
  //   });

  //   console.log(`Cart Total is ${cartTotal}`);
  //   setcartItemsTotal(cartTotal.toFixed(2)); //11.22
  // };
  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="grid_12">
            <h1>Your Cart</h1>
          </div>
          <ul className="items">
            {cart.map((item) => {
              console.log("I am an item from map", item);
              return <CartItem item={item} />;
            })}

            {/* <li className="grid_4 item">
              <a href="#" className="btn-remove">
                <i className="far fa-trash-alt"></i>
              </a>
              <div className="preview">
                <img src="https://assets.cookfood.net/product_811.jpg" />
              </div>
              <div className="details" data-price="2.49">
                <h3>Garlic Ciabatta</h3>
                <p>Serves 4</p>
              </div>
              <div className="inner_container">
                <div className="col_1of2 align-center picker">
                  <p>
                    <a href="#" className="btn-quantity plus">
                      <i className="fas fa-plus"></i>
                    </a>
                    <div className="col_1of2 quantity-text">
                      <p>
                        <span className="current_quantity">1</span> @ £2.49
                      </p>
                    </div>
                    <a href="#" className="btn-quantity minus">
                      <i className="fas fa-minus"></i>
                    </a>
                  </p>
                  <input
                    type="hidden"
                    className="quantity_field"
                    name="quantity"
                    data-price="2.49"
                    value="1"
                  />
                </div>
              </div>
            </li>
            <li className="grid_4 item">
              <a href="#" className="btn-remove">
                <i className="far fa-trash-alt"></i>
              </a>
              <div className="preview">
                <img src="https://assets.cookfood.net/product_1504.jpg" />
              </div>
              <div className="details" data-price="8.50">
                <h3>White Chocolate & Raspberry Cheesecake</h3>
                <p>Serves 6 (550g)</p>
              </div>
              <div className="inner_container">
                <div className="col_1of2 align-center picker">
                  <p>
                    <a href="#" className="btn-quantity plus">
                      <i className="fas fa-plus"></i>
                    </a>
                    <div className="col_1of2 quantity-text">
                      <p>
                        <span className="current_quantity">1</span> @ £8.50
                      </p>
                    </div>
                    <a href="#" className="btn-quantity minus">
                      <i className="fas fa-minus"></i>
                    </a>
                  </p>
                  <input
                    type="hidden"
                    className="quantity_field"
                    name="quantity"
                    data-price="8.50"
                    value="1"
                  />
                </div>
              </div>
            </li> */}
          </ul>
          <div className="grid_12 delivery-payment">
            <div className="grid_6 delivery-address">
              <h3>Delivery Address</h3>
              <p>
                46 Vale Road
                <br />
                Ramsgate
              </p>
            </div>
            <div className="grid_6 payment-details">
              <h3>Payment Card</h3>
              <p> **** **** **** 8678</p>
            </div>
          </div>
          <div className="grid_12 coupon">
            <h3>Apply Coupon</h3>
            <input className="coupon-input" type="text" />
          </div>

          <div className="grid_12 summary">
            <div className="inner_container">
              <div className="summary-content">
                <div className="col_1of2 meta-data">
                  <div className="sub-total">
                    <em>Sub Total: </em>
                    <span className="amount"></span>
                  </div>
                  <div className="taxes">
                    <em>Plus VAT: </em>
                    <span className="amount">@ 20%</span>
                  </div>
                </div>
                <div className="col_1of2">
                  <div className="total">
                    {/* <span className="amount">£{cartItemsTotal}</span> */}
                  </div>
                </div>
              </div>
              <div className="btn-summary">
                <a href="#" className="btn-checkout btn-reverse">
                  Continue Shopping
                </a>

                <a href="#" className="btn-checkout">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
