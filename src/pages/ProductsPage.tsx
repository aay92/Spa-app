// src/pages/ProductsPage.tsx
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useProductStore } from "../store/productStore";

const ProductsPage: React.FC = () => {
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const [filter, setFilter] = useState<"all" | "liked">("all");

  useEffect(() => {
    console.log("Loading data");
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="mainPage">
      <div className="mainPage buttons">
        <button onClick={() => setFilter("all")}>Все товары</button>
        <button onClick={() => setFilter("liked")}>Избраное</button>
      </div>
      <ProductList filter={filter} />
    </div>
  );
};

export default ProductsPage;
