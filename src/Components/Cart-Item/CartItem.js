import React, { useEffect, useState } from "react";
import {
  deleteFromCart,
  updateQty,
  findCartItemsTotal,
  selectCart,
} from "../../Redux/features/slices/cartSlice";
import "../Cart/cart.css";
import { useSelector, useDispatch } from "react-redux";
// Two things that must be there on a React input field: value, onChange
const CartItem = ({ item }) => {
  const cart = useSelector(selectCart);

  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(item.quantity);

  const updateCartQuantity = (e, id) => {
    setItemQuantity(e.target.value);
    dispatch(updateQty({ id: id, value: e.target.value }));

    console.log("this is from update Qty ", e.target.value, id);
  };

  const deleteItem = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      <li className="grid_4 item">
        <a href="#" className="btn-remove">
          <i className="far fa-trash-alt"></i>
        </a>
        <div className="preview">
          <img src={item.image} />
        </div>
        <div className="details" data-price="15.50">
          <h3>{item.title}</h3>
          <p className="overflow">{item.description}</p>
        </div>
        <div className="inner_container">
          <input
            type="number"
            min={1}
            onChange={(e) => updateCartQuantity(e, item.id)}
            className="form-control"
            value={itemQuantity}
          />
          <p>£{(item.price * itemQuantity).toFixed(2)}</p>
          <button onClick={() => deleteItem(item.id)} type="button">
            Delete
          </button>
        </div>
      </li>
    </>
  );
};
export default CartItem;
