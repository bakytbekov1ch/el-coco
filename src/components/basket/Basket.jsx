import React from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDeleteSweep } from "react-icons/md";

import "./Basket.scss";

function Basket() {
  return (
    <div className="basket">
      <div className="container">
        <div className="basket__content">
          <div className="basket__block">
            <div className="basket__images">
              <img
                src="https://object.pscloud.io/cms/cms/Photo/img_0_77_4338_0_1.jpg"
                alt=""
              />

              <div>
                <h1>Redmi not 12 Pro</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  dolore at id tempora.
                </p>
              </div>
            </div>

            <div className="basket__btn">
              <h2>17 500с</h2>

              <div className="basket__select">
                <h3>Память</h3>
                <select name="" id="">
                  <option value="">32гб</option>
                  <option value="">64гб</option>
                  <option value="">128гб</option>
                  <option value="">256гб</option>
                  <option value="">512гб</option>
                </select>
              </div>

              <div className="basket__guentity">
                <FiMinus className="basket__minus" />
                <h2>1</h2>
                <FaPlus className="basket__plus" />
              </div>

              <button>Купить</button>

              <MdOutlineDeleteSweep className="basket__delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
