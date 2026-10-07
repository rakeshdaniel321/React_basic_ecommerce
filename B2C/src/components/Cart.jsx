import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
function Cart({ cartItems, setPage, totalPrice, setCartItems }) {
  console.log("cartItems in cart component", cartItems);

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            return item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };
  const increament = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  // console.log("prev in removeFromCart", cartItems);
  return (
    <>
      {/* <button className="view-products-btn"  id="view-products-btn" onClick={() => setPage("products")}>
      View Products
    </button> */}
      {/* {cartsList?.map((cart) => {
        return (
        <div className="Cardcontainer" key={cart.id}>
          {cart.products?.map((product,index) => (
            <div className="productCard" key={`${product.id}-${index}`}>
             <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ${product.total}</p> 
            </div>
          ))}
        </div>
      )})} */}
      <button className="view-products-btn" onClick={() => setPage("products")}>
        View Products
      </button>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <div className="ProductsContainer">
        {cartItems?.map((product, index) => {
          return (
            <div className="productCard " key={`${product.id}-${index}`}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p id="product-price">Price: ${product.price}</p>
              <p id="product-brand">Brand: {product.brand}</p>
              <p id="product-category">Category: {product.category}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ${product.price * product.quantity}</p>
              <button
                className="decrease-icon"
                onClick={() => decreaseQuantity(product.id)}
                aria-label="Decrease quantity"
              >
                <FiMinus />
              </button>{" "}
              <br />
              <button className="increment-btn"
                onClick={() => increament(product.id)}
                aria-label="Increase quantity"
              >
                <FiPlus />
              </button>
              <br />
              <button
                onClick={() => removeFromCart(product.id)}
                style={{ color: "red" }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
