import React from "react";

import "./Total.scss";
import { useSelector } from "react-redux";

function Total({ handleItems }) {
  const { basketItem } = useSelector((state) => state.basket);

  const totalClick = basketItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = 200;
  const total = totalClick + delivery;

  return (
    <div className="total">
      <div className="container">
        <div className="total__block">
          <div className="total__content">
            <div className="total__price">
              <h2>
                Товары: {basketItem.length}
                <span> шт</span>
              </h2>
              <h2>Итого:</h2>
            </div>
            <div className="total__price">
              <h3>Доставка: 200 сом</h3>
              <h3>{total} сом</h3>
            </div>
          </div>
          <div className="total__button">
            <button onClick={() => handleItems()}>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total;
