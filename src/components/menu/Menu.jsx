import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import "./Menu.scss";

function Menu() {
  const [isopen, setIsopen] = useState();

  return (
    <div className="menu">
      <div className="menu__content">
        <h1>Меню</h1>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>News</li>
          <li>Basket</li>
          <li onClick={() => setIsopen(!isopen)} className="menu__tr">
            Translation
            <div className="menu__h2">
              <HiChevronDown />
            </div>
          </li>
          {isopen && (
            <div className="menu__menu">
              <li>KGZ <span>(Кыргызстан)</span></li>
              <li>RUB <span>(Россия)</span></li>
              <li>ENG <span>(Англия)</span></li>
            </div>
          )}
          <li>Search</li>
          <li>Profile</li>
          <li>Адрес</li>
          <li>Как продать</li>
          <li>Как купить</li>
          <li>Setings</li>
          <li style={{ color: "black" }}>Exit</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
