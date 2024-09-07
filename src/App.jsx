import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import BasketPage from "./pages/BasketPage";
import PlusPage from "./pages/PlusPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import NotfoundPage from "./pages/NotfoundPage";
import Auth from "./auth/Auth";
import ProfileOne from "./components/profile-1/ProfileOne";
import AddressPage from "./pages/AddressPage";
import ProductLate from "./components/productlate/ProductLate";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotfoundPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/plus" element={<PlusPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/a1" element={<ProfileOne />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/productlate/:id" element={<ProductLate />} />
      </Route>
    </Routes>
  );
}

export default App;
