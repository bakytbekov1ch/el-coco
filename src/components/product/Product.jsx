import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsBookmarkFill } from "react-icons/bs";
import { addtocart } from "../../reduxe/CreateSlice/CreateSlice";
import { AddToBook } from "../../reduxe/BookSlice/BookSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import news from "../../assets/images/news.png";
import "./Product.scss";

function Product({ items = [] }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cart = useSelector((state) => state.basket.cart);
  const book = useSelector((state) => state.book.book);

  function taskClick(item) {
    const handleClick = book.find((x) => x.id === item.id);

    if (!handleClick) {
      dispatch(AddToBook(item));
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

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="product__content">
          <div className="product__images">
            <img src={item.image} alt={item.name} />
            <BsBookmarkFill
              onClick={() => taskClick(item)}
              className="product__book"
            />
            <div className="product__white"></div>
            <img className="product__news" src={news} alt="" />
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
