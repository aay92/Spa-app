// src/store/productStore.ts
import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  image: string;
  liked: boolean;
  description: string;
};

type ProductStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  toggleLike: (id: number) => void;
  fetchProducts: () => Promise<void>;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id) =>
    set((state) => ({ products: state.products.filter((p) => p.id !== id) })),
  toggleLike: (id) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, liked: !p.liked } : p
      ),
    })),
  fetchProducts: async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    set({ products: data.map((item: any) => ({ ...item, liked: false })) });
  },
}));
