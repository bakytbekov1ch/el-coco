import React, { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaCartArrowDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Translation from "../../../components/translation/Translation";
import { useClickOutside } from "../../../scss/useRef";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Menu from "../../../components/menu/Menu";
import { useTranslation } from "react-i18next";
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
              <li>{t("address")}</li>
              <li>{t("sell")}</li>
              <li>{t("buy")}</li>
            </ul>
            <div className="header__icons">
              <FaLocationDot className="header__add" />
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
            <h1>el-coco</h1>
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
              <MdAccountCircle className="header__btns-icon" />
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
