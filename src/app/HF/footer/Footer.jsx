import React from "react";
import { PiTelegramLogo } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { TbClockHour5 } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <h1>el-coco</h1>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="footer__block">
              <PiTelegramLogo className="footer__btn" />
              <IoLogoInstagram className="footer__btn" />
              <IoMailOutline className="footer__btn" />
            </div>
          </div>

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

          <div className="footer__icons">
            <div className="footer__hours">
              <TbClockHour5 className="footer__phone" />
              <h2>09:00-18:00 (Без вых)</h2>
            </div>

            <div className="footer__hours">
              <FiPhoneCall className="footer__phone" />
              <h2>+996 (507)-11-16-69</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
