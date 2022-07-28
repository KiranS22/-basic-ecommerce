import React, { useState } from "react";
import { deleteFromCart } from "../../Redux/features/slices/cartSlice";
import "../Cart/cart.css";
import { useDispatch } from "react-redux";
// Two things that must be there on a React input field: value, onChange
const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  console.log("Item Qty: " + item.quantity);
  const [itemQuantity, setItemQuantity] = useState(item.quantity);

  console.log("I am an item", itemQuantity);
  const updateCartQuantity = (e) => {
    setItemQuantity(e.target.value);
    console.log(item.id);

    //   /// /loop through the cart array
    //   //check if any element in the cart matches item.id
    //   //if it matches += e.target.value
    //   // Otherwise += that cart items quantity

    //   let total = 0;
    //   cart.forEach((cartItem) => {
    //     if (cartItem.id === item.id) {
    //       total += Number(e.target.value);
    //     } else {
    //       total += cartItem.quantity;
    //     }
    //   });
    //   setCartCount(total);

    //   console.log(`Update Qty of ${item.id} to ${e.target.value}`);

    //   /*Loop over the cart to find the desired item id
    //   set cart  quantity equal to e.target.value of that item  */

    //   setCart(
    //     cart.map((cartItem) => {
    //       if (cartItem.id === item.id)
    //         return { ...cartItem, quantity: Number(e.target.value) };
    //       else return cartItem;
    //     })
    //   );
    // };

    const deleteItem = () => {
      dispatch(deleteFromCart(item))
    };

    return (
      <>
        /{" "}
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
              onChange={(e) => updateCartQuantity(e)}
              className="form-control"
              value={item.quantity}
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
};
export default CartItem;
