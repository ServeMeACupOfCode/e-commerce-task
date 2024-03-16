import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductList from "../Components/ProductListing";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductListPage;
