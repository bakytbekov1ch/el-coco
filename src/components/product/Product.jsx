import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { addtocart } from "../../reduxe/CreateSlice/CreateSlice";

import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const API = "https://669366b5c6be000fa07b6234.mockapi.io/el-coco";

function Product() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [value, setValue] = useState([]);
  const cart = useSelector((state) => state.basket.cart);

  async function handleClick() {
    try {
      const res = await axios.get(API);
      console.log(res.data);
        
      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddtocart = (item) => {
    const handleClick = cart.find((x) => x.id === item.id);

    if (!handleClick) {
      dispatch(addtocart(item));
      toast.success("Товар в корзине.", {
        autoClose: 1000,
      });
    } else {
      toast.error("Товар уже в корзине.", {
        autoClose: 1000,
      });
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      {value.map((item, index) => (
        <div key={index} className="product__content">
          <div className="product__images">
            <img src={item.image} alt={item.name} />
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

            <button onClick={() => handleAddtocart(item)}>{t("cart")}</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;
