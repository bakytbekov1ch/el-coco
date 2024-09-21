import React from "react";
import { TbCameraPlus } from "react-icons/tb";
import baxa from "../../assets/video/baxa.mp4";
import { BuyProductData } from "../../data/data";

import "./BuyProduct.scss";
import { Link } from "react-router-dom";

function BuyProduct() {
  return (
    <div className="buyproduct">
      <div className="container">
        <div className="buyproduct__content">
          <div className="buyproduct__buy">
            <h2>Buy</h2>
            <div className="buyproduct__image">
              <TbCameraPlus className="buyproduct__icon" />
              <span>Lorem ipsum dolor sit.</span>
            </div>

            <input className="line" type="text" placeholder="Name" />

            <input className="line" type="text" placeholder="Price" />

            <input className="line" type="text" placeholder="ФИО" />

            <input className="line" type="text" placeholder="Phone Number" />

            <select className="line" name="" id="">
              <option value="">Phone</option>
              <option value="">Laptop</option>
            </select>

            <select className="line" name="" id="">
              <option value="#">New</option>
              <option value="#">Used</option>
            </select>

            <div className="buyproduct__buttons">
              <button className="buy__button">
                <Link to="/" className="Link">
                  Exit
                </Link>
              </button>
              <button style={{ background: "blue" }}>Submit </button>
            </div>
          </div>

          <div className="buyproduct__buy">
            <h2>Example</h2>

            <div className="buyproduct__image">
              <video
                className="buyproduct__video"
                controls
                autoPlay
                src={baxa}
              ></video>
            </div>

            {BuyProductData.map((item) => (
              <h3 className="line" key={item.id}>{item.title}</h3>
            ))}

            <p>
              Жогору да көрсөлүткөндөй кылып толтуруңуз болбосо сиздин
              билдирүүңүз каралбайт!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
