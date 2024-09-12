import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import news from "../../assets/images/news.png";
const API = "https://669366b5c6be000fa07b6234.mockapi.io/el-coco";

import "../product/Product.scss";
import "./ProductSearch.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProductSearch() {
  const { t } = useTranslation();
  const [product, setProduct] = useState([]);
  const [isma, setIsma] = useState("");

  const handleIsma = (e) => {
    setIsma(e.target.value.toUpperCase());
  };

  async function handleProduct() {
    try {
      const res = await axios.get(API);

      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const filterProduct = product.filter((arr) =>
    arr.name.toUpperCase().includes(isma)
  );

  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <div className="productsearch">
      <div className="container">
        <div className="productsearch__input">
          <input onChange={handleIsma} type="text" placeholder="search" />
          <IoMdSearch className="productsearch__icon" />
        </div>
        <div className="productsearch__content">
          {filterProduct.slice(0, 6).map((item, index) => (
            <div key={index} className="product__content">
              <div className="product__images">
                <img src={item.image} alt={item.name} />

                <BsBookmarkFill className="product__book" />
                <div className="product__white"></div>
                <img className="product__news" src={news} alt="" />

                <button className="product__button">
                  <Link
                    style={{ color: "black" }}
                    to={`/productlate/${item.id}`}
                  >
                    Просмотреть
                  </Link>
                </button>
              </div>

              <div className="product__text">
                <h1>{item.name}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, nam..
                </p>
                <div className="product__price">
                  <h3>{item.price} сом</h3>
                  <h4>1 шт</h4>
                </div>

                <button onClick={() => handleAddtocart(item)}>
                  {t("cart")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="productsearch__button">Все резултаты</button>
      </div>
    </div>
  );
}

export default ProductSearch;
