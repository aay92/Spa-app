import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
