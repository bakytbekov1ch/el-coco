import React, { useState } from "react";
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

const mocapi = "https://669366b5c6be000fa07b6234.mockapi.io/el-coco";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value.toUpperCase());
  };

  const filterhandle = (car) => {
    const cartItem = mocapi.filter((name) => {
      return name.categoryAt === car;
    });

    setSearch(cartItem);
  };

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            index
            element={
              <HomePage
                setSearch={setSearch}
                filterhandle={filterhandle}
                handleSearch={handleSearch}
                search={search}
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
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
