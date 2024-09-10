import React from "react";
import "./News.scss";
import Product from "../product/Product";

function News() {
  return (
    <div className="news">
      <div className="container">
        <div className="news__content">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default News;
