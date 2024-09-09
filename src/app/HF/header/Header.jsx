import React, { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaCartArrowDown } from "react-icons/fa";
// import { MdAccountCircle } from "react-icons/md";
import Translation from "../../../components/translation/Translation";
import { useClickOutside } from "../../../scss/useRef";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Menu from "../../../components/menu/Menu";
import { useTranslation } from "react-i18next";
import { BsPlusCircleFill } from "react-icons/bs";
import "./Header.scss";

function Header() {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  const [world, setWorld] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  useClickOutside(menuRef, () => setWorld(false));
  useClickOutside(btnRef, () => setMenu(false));

  return (
    <>
      <div className="header">
        <div className="container">
          <nav className="header__nav">
            <ul>
              <Link to="/address">
                <li>{t("address")}</li>
              </Link>
              <li>{t("sell")}</li>
              <li>{t("buy")}</li>
            </ul>
            <div className="header__icons">
              <Link to="https://2gis.kg/bishkek/search/%D0%90%D0%B1%D0%B4%D1%8B%D0%BA%D0%B0%D0%B4%D1%8B%D1%80%D0%BE%D0%B2%D0%B0%20204/geo/15763234351028221/74.568431%2C42.862781?m=74.570111%2C42.859597%2F16.11">
                <FaLocationDot className="header__add" />
              </Link>
              <TbWorld
                onClick={() => setWorld(!world)}
                className="header__world"
              />
              <div
                className={`header__trans ${world ? "active" : ""}`}
                ref={menuRef}
              >
                {world && <Translation />}
              </div>
            </div>
          </nav>
          <div className="header__content">
            <Link to="/">
              <h1>el-coco</h1>
            </Link>
            <ul>
              <li>
                <Link style={{ color: "white" }} to="/">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link style={{ color: "white" }} to="/about">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link style={{ color: "white" }} to="/contact">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link style={{ color: "white" }} to="/news">
                  {t("new")}
                </Link>
              </li>
            </ul>
            <div className="header__btns">
              <Link to="/basket">
                <FaCartArrowDown className="header__btns-icon" />
              </Link>
              <Link to="/plus">
                <BsPlusCircleFill className="header__btns-plus" />
              </Link>
              <Link to="/auth">
                <button>{t("login")}</button>
              </Link>
              {/* <Link to="/profile">
                <MdAccountCircle className="header__btns-icon" />
              </Link> */}
              <TfiMenuAlt
                onClick={() => setMenu(!menu)}
                className="header__btns-menu"
              />
              <div
                className={`header__menu ${menu ? "active" : ""}`}
                ref={btnRef}
              >
                {menu && <Menu />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
