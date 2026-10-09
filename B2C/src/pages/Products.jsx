import React from "react";
import { FaRegHeart, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useProducts } from "../hooks/useProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Products() {
  const { products, loading, error, handleCart } = useProducts();

  const cartItems = useSelector((state) => state.cart.items);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="Products-Container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <button
              id="addToCart-btn"
              onClick={() => {
                console.log("Clicked:", product);
                handleCart(product);
              }}
            >
              <FaRegHeart />
            </button>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p id="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
