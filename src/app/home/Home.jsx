import React from "react";
import Search from "../../components/search/Search";
import Product from "../../components/product/Product";
import CustomCarousel from "../../components/carousel/Carousel";

function Home({ search, handleSearch, filterhandle, setSearch }) {
  return (
    <div>
      <div className="container">
        <div className="header__carousel">
          <CustomCarousel />
        </div>
        <div className="header__search">
          <Search
            setSearch={setSearch}
            filterhandle={filterhandle}
            search={handleSearch}
          />
        </div>

        <div className="product__home">
          <Product items={search} />
        </div>
      </div>
    </div>
  );
}

export default Home;
