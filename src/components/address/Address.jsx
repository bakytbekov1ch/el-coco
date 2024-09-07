import React from "react";
import { AddressData } from "../../data/data";
import { FaMinus } from "react-icons/fa6";

import "./Address.scss";

function Address() {
  return (
    <div className="address">
      <div className="container">
        <h1>Биздин даректерибиз</h1>
        <h2>
          Иштө убактысы 09:00  <FaMinus /> 18:00
        </h2>
        <div className="address__content">
          {AddressData.map((item, index) => (
            <div key={index} className="address__block">
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Address;
