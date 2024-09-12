import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Search from "../../components/search/Search";
import Product from "../../components/product/Product";

function Home({ search, handleSearch }) {
  return (
    <div>
      <div className="container">
        <div className="header__carousel">
          <Carousel />
        </div>
        <div className="header__search">
          <Search search={handleSearch} />
        </div>

        <div className="product__home">
          <Product items={search} />
        </div>
      </div>
    </div>
  );
}

export default Home;
