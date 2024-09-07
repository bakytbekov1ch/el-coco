import React from "react";
import ellipse from "../../assets/images/ellipse.jpg";
import image from "../../assets/images/image.png";

import "./NotFount.scss";
import { Link } from "react-router-dom";

function NotFount() {
  return (
    <div className="not">
      <div className="notfount">
        <div className="container">
          <div className="notfount__content">
            <div className="fount__text">
              <h1>404-error </h1>
              <h2>PAGE NOT FOUND </h2>
              <h4>Your search has ventured beyond the known universe.</h4>

              <Link to="/">
                <button>Back To Home</button>
              </Link>
            </div>
            <div className="fount__images">
              <img style={{ width: "100%" }} src={ellipse} alt="" />
              <img
                className="fount__img"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFount;
