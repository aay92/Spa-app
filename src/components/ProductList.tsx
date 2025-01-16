// src/components/ProductList.tsx
import React from "react";
import { useProductStore } from "../store/productStore";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductList: React.FC<{ filter: "all" | "liked" }> = ({ filter }) => {
  const products = useProductStore((state) => state.products);
  const filteredProducts =
    filter === "liked" ? products.filter((p) => p.liked) : products;
  const navigate = useNavigate();

  return (
    <div className="produtList">
      {filteredProducts.map((product: any) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={() => navigate(`/products/${product.id}`)}
        />
      ))}
    </div>
  );
};

export default ProductList;
