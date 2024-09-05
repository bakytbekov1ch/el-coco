import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import "./Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  const [isopen, setIsopen] = useState();
  const { t, i18n } = useTranslation();

  const changelang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="menu">
      <div className="menu__content">
        <h1>{t("menu")}</h1>

        <ul>
          <Link to="/">
            <li>{t("home")}</li>
          </Link>
          <Link to="/about">
            <li>{t("about")}</li>
          </Link>
          <Link to="/contact">
            <li>{t("contact")}</li>
          </Link>
          <Link to="/news">
            <li>{t("new")}</li>
          </Link>
          <Link to="/basket">
            <li>{t("basket")}</li>
            <li onClick={() => setIsopen(!isopen)} className="menu__tr">
              {t("trans")}
              <div className="menu__h2">
                <HiChevronDown />
              </div>
            </li>
          </Link>
          {isopen && (
            <div className="menu__menu">
              <li onClick={() => changelang("ky")}>
                KGZ <span>(Кыргызстан)</span>
              </li>
              <li onClick={() => changelang("ru")}>
                RUB <span>(Россия)</span>
              </li>
              <li onClick={() => changelang("en")}>
                ENG <span>(Англия)</span>
              </li>
            </div>
          )}
          <li>{t("profile")}</li>
          <li>{t("address")}</li>
          <Link to="/auth">
            <li>{t("sell")}</li>
          </Link>
          <li>{t("buy")}</li>
          <li>{t("settings")}</li>
          <li style={{ color: "black" }}>{t("exit")}</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
