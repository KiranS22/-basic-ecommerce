import React, { useEffect, useState } from "react";
import {
  deleteFromCart,
  updateQty,
  findCartItemsTotal,
  selectCart,
} from "../../Redux/features/slices/cartSlice";
import "../Cart/cart.css";
import { useSelector, useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const cart = useSelector(selectCart);

  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(item.quantity);

  const updateCartQuantity = (e, id) => {
    console.log("update cart quantity is running");
    console.log(e.target.value, id);
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
        <a href="#" className="btn-remove"></a>
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
            className="form-control w-25"
            value={itemQuantity}
          />
          <p>£{(item.price * itemQuantity).toFixed(2)}</p>
          <i
            className="far fa-trash-alt"
            onClick={() => deleteItem(item.id)}
            type="button"
            style={{ color: "red", fontSize: "25px" }}
          ></i>
        </div>
      </li>
    </>
  );
};
export default CartItem;
