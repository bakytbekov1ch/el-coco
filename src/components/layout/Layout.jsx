import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../app/HF/header/Header";
import Footer from "../../app/HF/footer/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <div style={{ marginBottom: "200px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
