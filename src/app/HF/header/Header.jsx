import React, { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaCartArrowDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Carousel from "../../../components/carousel/Carousel";
import Translation from "../../../components/translation/Translation";
import { useClickOutside } from "../../../scss/useRef";
import Search from "../../../components/search/Search";
import { TfiMenuAlt } from "react-icons/tfi";
import "./Header.scss";
import { Link } from "react-router-dom";
import Menu from "../../../components/menu/Menu";

function Header() {
  const [menu, setMenu] = useState(false);
  const [world, setWorld] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  useClickOutside(menuRef, () => {
    setWorld(false)
  });
  
  useClickOutside(btnRef, () => {
    setMenu(false);
  });

  return (
    <>
      <div className="header">
        <div className="container">
          <nav className="header__nav">
            <ul>
              <li>Адрес</li>
              <li>Как продать</li>
              <li>Как купить</li>
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
                  Home
                </Link>
              </li>
              <li>
                <Link style={{ color: "white" }} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link style={{ color: "white" }} to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link style={{ color: "white" }} to="/news">
                  News
                </Link>
              </li>
            </ul>

            <div className="header__btns">
              <FaCartArrowDown className="header__btns-icon" />
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
      <div className="container">
        <div className="header__carousel">
          <Carousel />
        </div>
        <div className="header__search">
          <Search />
        </div>
      </div>
    </>
  );
}

export default Header;
