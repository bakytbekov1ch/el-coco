import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../app/HF/header/Header";
import Footer from "../../app/HF/footer/Footer";
import HeaderMenu from "../headerMenu/HeaderMenu";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <div className="header__end">
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Layout;
