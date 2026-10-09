import React from "react";
import "../styles/ProductFilters.css";

function ProductFilters({
  categories,
  brands,
  selectedCategory,
  setSelectedCategory,
  selectedBrands,
  toggleBrand,
  maxPrice,
  priceCap,
  setMaxPrice,
  sortBy,
  setSortBy,
  clearFilters,
}) {
  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          CLEAR ALL
        </button>
      </div>

      {/* Category */}
      <section className="filter-section">
        <h4>CATEGORY</h4>

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All Categories</option>

          {categories.map((category) => (
            <option id="categroy-option" style={{color:"green",scrollbarWidth:"none"}} key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </section>

      {/* Multiple Brand Checkboxes */}
      <section className="filter-section">
        <h4>BRAND</h4>

        {brands.map((brand) => (
          <label className="filter-option" key={brand}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}

        {brands.length === 0 && (
          <p className="filter-muted">No brands available</p>
        )}
      </section>

      {/* Maximum Price */}
      <section className="filter-section">
        <h4>MAXIMUM PRICE</h4>

        <input
          className="price-slider"
          type="range"
          min="0"
          max={Math.max(priceCap, 1)}
          value={Math.min(maxPrice, Math.max(priceCap, 1))}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
        />

        <div className="price-labels">
          <span>$0</span>
          <strong>${maxPrice}</strong>
        </div>
      </section>

      {/* Sorting */}
      <section className="filter-section">
        <h4>SORT BY</h4>

        {[
          { value: "default", label: "Recommended" },
          { value: "a-z", label: "Name: A to Z" },
          { value: "z-a", label: "Name: Z to A" },
          { value: "low-to-high", label: "Price: Low to High" },
          { value: "high-to-low", label: "Price: High to Low" },
        ].map((option) => (
          <label className="filter-option" key={option.value}>
            <input
              type="radio"
              name="sortBy"
              value={option.value}
              checked={sortBy === option.value}
              onChange={() => setSortBy(option.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </section>
    </aside>
  );
}

export default ProductFilters;
