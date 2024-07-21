// src/Filter.js
import React from "react";

const Filter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}) => {
  return (
    <div>
      <label>
        Category:
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <label>
        Price Range:
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <span>{priceRange}</span>
      </label>
    </div>
  );
};

export default Filter;
