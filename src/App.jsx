import React, { useEffect, useState } from "react";
import { fetchProducts } from "./api.js";
import ProductList from "./components/ProductList.jsx";
import Filter from "./components/Filter.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(1000);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setFilteredProducts(products);
      setCategories([...new Set(products.map((product) => product.category))]);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        (selectedCategory === "" || product.category === selectedCategory) &&
        product.price <= priceRange
    );
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, products]);

  return (
    <div>
      <h1>Product Filter</h1>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
