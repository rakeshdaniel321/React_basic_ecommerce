import React from "react";
import { FaRegHeart, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useProducts } from "../hooks/useProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductFilters from "../components/ProductFilters";
function Products() {
  
   const {products,loading,error,handleCart,categories,brands,selectedCategory, setSelectedCategory,selectedBrands,
    toggleBrand,maxPrice, priceCap,setMaxPrice, sortBy,setSortBy,clearFilters,} = useProducts();

     const cartItems = useSelector((state) => state.cart.items);


  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <main id="products-box">
      <aside id="left">
      <ProductFilters
          categories={categories}
          brands={brands}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrands={selectedBrands}
          toggleBrand={toggleBrand}
          maxPrice={maxPrice}
          priceCap={priceCap}
          setMaxPrice={setMaxPrice}
          sortBy={sortBy}
          setSortBy={setSortBy}
          clearFilters={clearFilters}
        />
      </aside>
    
      
      <section className="Products-Container">
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
      </section>
    </main>
    </div>
  );
}

export default Products;
