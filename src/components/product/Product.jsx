import React, { useEffect, useState } from "react";
const API = "https://669366b5c6be000fa07b6234.mockapi.io/el-coco";

import "./Product.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function Product() {
  const [value, setValue] = useState([]);

  async function handleClick() {
    try {
      const res = await axios.get(API);

      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      {value.map((item, index) => (
        <div key={index} className="product__content">
          <div className="product__images">
            <img src={item.image} alt="" />

            <button className="product__button">
              <Link style={{ color: "black" }} to={`/productlate/${item.id}`}>
                Просмотреть
              </Link>
            </button>
          </div>

          <div className="product__text">
            <h1>{item.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              nam..
            </p>
            <div className="product__price">
              <h3>{item.price} сом</h3>
              <h4>1 шт</h4>
            </div>

            <button>Add To Cart</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;
