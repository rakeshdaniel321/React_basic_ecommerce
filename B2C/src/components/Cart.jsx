import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiMinus, FiPlus } from "react-icons/fi";
import { increment, decrement, removeFromCart } from "../stores/CartSlice";
import { showSuccess } from "./Toast/Toast";

function Cart() {


  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart UI cartItems:", cartItems);


  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div>
       <p id="Total-price-tag">Total Price: ${totalPrice.toFixed(2)}</p>
      <div className="Products-Container">
        {cartItems?.length === 0 ? (
          <h2>Your cart is empty! 🛒</h2>
        ) : (
               
          cartItems.map((product) => (
            <div className="product-Card" key={product.id}>
             
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p id="product-price">Price: ${product.price}</p>
              <p id="product-quentity">Quantity: {product.quantity}</p>
              <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>

              <button
                className="increment-btn"
                onClick={() => dispatch(increment(product.id))}
              >
                <FiPlus />
              </button>

              <button
                className="decrease-icon"
                onClick={() => dispatch(decrement(product.id))}
              >
                <FiMinus />
              </button>

              <button id="removecart-btn"
                onClick={() => {dispatch(removeFromCart(product.id));
                  showSuccess(`${product.title} Remove successfully`)}}
                
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
