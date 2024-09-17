import React from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";

import "./ProfileOne.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function ProfileOne() {
  const { t } = useTranslation();
  const book = useSelector((state) => state.book.book);

  return (
    <div className="profileone">
      <div className="profileone__btn">
        {book.map((item, index) => (
          <div key={index} className="profileone__content">
            <img src={item.image} alt="" />

            <h1>{item.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sit!
            </p>
            <div className="profileone__btn">
              <h2>{item.price}сом</h2>
              <h3>1 шт</h3>
            </div>

            <div className="profileone__buttons">
              <div className="profileone__icon">
                <button style={{ background: "blue" }}>
                  <MdOutlineShoppingCartCheckout />
                </button>
                <button style={{ background: "red" }}>
                  <MdOutlineDeleteSweep />
                </button>
              </div>
              <button>{t("basketbuy")}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileOne;
