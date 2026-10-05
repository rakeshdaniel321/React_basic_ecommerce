import React from 'react'

function Cart({ cartItems, setPage }) {
  console.log("cartItems in cart component", cartItems); 
 
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
      <button  className="view-products-btn" onClick={() => setPage("products")}>
        View Products
      </button>
      <div className="ProductsContainer" >
        {cartItems?.map((product,index) => {
          return (
            <div className="productCard " key={`${product.id}-${index}`}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p id="product-price">Price: ${product.price}</p>
              <p id="product-brand">Brand: {product.brand}</p>
              <p id="product-category">Category: {product.category}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Cart