import React from "react";

import success from "../../assets/images/success.avif";

import "./Success.scss";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success">
      <div className="container">
        <div className="success__content">
          <img src={success} alt="" />
          <h1>Success</h1>
          <p>
            Сиздин заказыңыз кабыл алынды. 1-3 саат ичинде менеджерлер тарабынан
            текшерилип, товар жөнөтүлөт.
          </p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
