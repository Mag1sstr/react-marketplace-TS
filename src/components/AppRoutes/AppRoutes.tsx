import { Route, Routes } from "react-router-dom";
import ProductPage from "../ProductPage/ProductPage";
import MainPage from "../MainPage/MainPage";
import Categories from "../Categories/Categories";
import CategoryPage from "../CategoryPage/CategoryPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
    </Routes>
  );
}
