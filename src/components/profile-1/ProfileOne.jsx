import React from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";

import "./ProfileOne.scss";

function ProfileOne() {
  return (
    <div className="profileone">
      <div className="profileone__btn">
        <div className="profileone__content">
          <img
            src="https://i.insider.com/5df10d81fd9db229ba736a77?width=700"
            alt=""
          />

          <h1>iPhone 11</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sit!
          </p>
          <div className="profileone__btn">
            <h2>42 000сом</h2>
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
            <button>Сатып Алуу</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOne;
