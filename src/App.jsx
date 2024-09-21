import React, { useEffect, useState } from "react";
import Header from "./app/HF/header/Header";
import Footer from "./app/HF/footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotfoundPage from "./pages/NotfoundPage";
import Auth from "./auth/Auth";
import ProfileOne from "./components/profile-1/ProfileOne";
import AboutPage from "./pages/AboutPage";
import AddressPage from "./pages/AddressPage";
import BasketPage from "./pages/BasketPage";
import Buy from "./components/buy/Buy";
import PlusPage from "./pages/PlusPage";
import ProfilePage from "./pages/ProfilePage";
import Pay from "./components/pay/Pay";
import ProductLate from "./components/productlate/ProductLate";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import SearchPage from "./pages/SearchPage";
import SellOne from "./components/sellOne/SellOne";
import axios from "axios";
import Layout from "./components/layout/Layout";

const apiUrl = "https://669366b5c6be000fa07b6234.mockapi.io/el-coco";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await axios.get(apiUrl);

      setItems(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toUpperCase();
    setSearch(searchQuery);

    const filtered = items.filter((product) =>
      product.name.toUpperCase().includes(searchQuery)
    );

    setProducts(filtered);
  };

  const filterhandle = (category) => {
    if (category === "all") {
      setProducts(items);
    } else {
      const filtered = items.filter((x) => x.categoryAt === category);
      setProducts(filtered);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route
          index
          element={
            <HomePage
              setSearch={setSearch}
              filterhandle={filterhandle}
              handleSearch={handleSearch}
              search={products}
            />
          }
        />
        <Route path="*" element={<NotfoundPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/a1" element={<ProfileOne />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/plus" element={<PlusPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/productlate/:id" element={<ProductLate />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/sell" element={<SellOne />} />
      </Route>
    </Routes>
  );
}

export default App;
