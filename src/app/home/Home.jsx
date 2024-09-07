import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Search from "../../components/search/Search";
import Product from "../../components/product/Product";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="header__carousel">
          <Carousel />
        </div>
        <div className="header__search">
          <Search />
        </div>

        <div className="product__home">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
