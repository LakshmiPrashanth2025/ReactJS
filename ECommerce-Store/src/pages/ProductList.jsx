import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Products from "../components/ProductCards";

export default function ProductList() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Products products={filteredProducts} />
    </div>
  );
}