// src/components/CreateProductForm.tsx
import React, { useState } from "react";
import { useProductStore } from "../store/productStore";

const CreateProductForm: React.FC<{ onSubmitSuccess: () => void }> = ({
  onSubmitSuccess,
}) => {
  const addProduct = useProductStore((state) => state.addProduct);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !image || !description) {
      setError("All fields are required");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      image,
      description,
      liked: false,
    };
    addProduct(newProduct);
    setName("");
    setImage("");
    setDescription("");
    setError("");
    onSubmitSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProductForm;
