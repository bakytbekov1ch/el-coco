import React from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

import "./Basket.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../reduxe/CreateSlice/CreateSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Basket() {
  const { t } = useTranslation();
  const basket = useSelector((state) => state.basket.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Ваш продукт был удален из корзины.");
  };

  const styleSlice = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  return (
    <div className="basket">
      <div className="container">
        <div className="basket__quantity">
          <div style={styleSlice}>
            <Link to="/">
              <h4>Home</h4>
            </Link>
            <h3>/</h3>
            <h4>Basket</h4>
          </div>

          <h3>
            Total:
            <span>0
              {/* {basket.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )} */}
            </span>
            сом
          </h3>
        </div>

        <div className="basket__content">
          {basket.map((item, index) => (
            <div key={index} className="basket__block">
              <div className="basket__images">
                <img src={item.image} alt={item.name} />

                <div>
                  <h1>{item.name}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error dolore at id tempora.
                  </p>
                  <h2>{item.price} с</h2>
                </div>
              </div>

              <div className="basket__btn">
                <h2>{item.price} с</h2>

                <div className="basket__select">
                  <h3>{t("memory")}</h3>
                  <select name="" id="">
                    <option value="">32 гб</option>
                    <option value="">64 гб</option>
                    <option value="">128 гб</option>
                    <option value="">256 гб</option>
                    <option value="">512 гб</option>
                  </select>
                </div>

                <div className="basket__quantity">
                  <FiMinus
                    className="basket__minus"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  />
                  <h2>{item.quantity}</h2>
                  <FaPlus
                    className="basket__plus"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  />
                </div>

                <button>{t("basketbuy")}</button>

                <MdOutlineDeleteSweep
                  className="basket__delete"
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Basket;
