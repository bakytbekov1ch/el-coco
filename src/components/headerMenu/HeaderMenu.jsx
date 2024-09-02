import React from "react";
import { IoHome } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdShoppingCartCheckout } from "react-icons/md";

import "./HeaderMenu.scss";
import { Link } from "react-router-dom";

function HeaderMenu() {
  return (
    <div className="headermenu">
      <div className="headermenu___content">
        <Link className="headermenu__icon" to="/">
          <IoHome />
        </Link>

        <Link className="headermenu__icon" to="/search">
          <RiMenuSearchLine />
        </Link>

        <Link to="/plus">
          <BsPlusCircleFill className="headermenu__plus"/>
        </Link>

        <Link className="headermenu__icon" to="/basket">
          <MdShoppingCartCheckout />
        </Link>

        <Link className="headermenu__icon" to="/profile">
          <MdAccountCircle />
        </Link>
      </div>
    </div>
  );
}

export default HeaderMenu;
