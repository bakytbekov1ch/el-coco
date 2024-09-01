import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
