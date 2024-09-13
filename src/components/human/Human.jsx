import React from "react";
import { AboutData } from "../../data/data";

import "./Human.scss";

function Human() {
  return (
    <div className="human">
      <div className="container">
        <div className="human__block">
          {AboutData.map((item, index) => (
            <div key={index} className="human__content">
              <img src={item.image} alt="" />
              <h1>{item.name}</h1>
              <h2>{item.phone}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Human;
