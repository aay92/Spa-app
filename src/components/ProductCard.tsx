// src/components/ProductCard.tsx
import React from "react";
import { useProductStore } from "../store/productStore";

const ProductCard: React.FC<{ product: any; onSelect: () => void }> = ({
  product,
  onSelect,
}) => {
  const toggleLike = useProductStore((state) => state.toggleLike);
  const removeProduct = useProductStore((state) => state.removeProduct);

  return (
    <div
      className="productCard"
      onClick={onSelect}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
        borderRadius: "25px",
      }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: "80%", borderRadius: "25px" }}
      />
      <h3>
        {product.title.length > 20
          ? `${product.title.substring(0, 20)}...`
          : product.title}
      </h3>
      <p>
        {product.description.length > 50
          ? `${product.description.substring(0, 50)}...`
          : product.description}
      </p>
      <div className="productCardButttonsLikeAndRemove">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(product.id);
          }}>
          {product.liked ? "❤️" : "🤍"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeProduct(product.id);
          }}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
