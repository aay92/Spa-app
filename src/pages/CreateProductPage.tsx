// src/pages/CreateProductPage.tsx
import React from "react";
import CreateProductForm from "../components/CreateProductForm";
import { useNavigate } from "react-router-dom";

const CreateProductPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmitSuccess = () => {
    navigate("/products"); // Переход на страницу со списком продуктов после успешного создания
  };

  return (
    <div>
      <h1>Create Product</h1>
      <CreateProductForm onSubmitSuccess={handleSubmitSuccess} />
    </div>
  );
};

export default CreateProductPage;
