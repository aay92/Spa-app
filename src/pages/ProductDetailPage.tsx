// src/pages/ProductDetailPage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProductStore } from "../store/productStore";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useProductStore((state) =>
    state.products.find((p) => p.id === Number(id))
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ maxWidth: "50%" }} />
      <p>{product.description}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetailPage;
