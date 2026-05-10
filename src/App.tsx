import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/public/Home";
import { ProductBrowse } from "@/pages/public/Products";
import { MainLayout } from "@/components/layout/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductBrowse />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
