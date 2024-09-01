import React from "react";
import ky from "../../assets/images/ky.png";
import ru from "../../assets/images/ru.png";
import en from "../../assets/images/en.png";

import "./Translation.scss";

function Translation() {
  return (
    <div className="translation">
      <div>
        <div className="btn-tr translation__ky">
          <img src={ky} alt="kgz" />
          <h4>KGZ</h4>
        </div>
        <div className="btn-tr translation__ru">
          <img src={ru} alt="kgz" />
          <h4>RUB</h4>
        </div>
        <div className="btn-tr translation__en">
          <img src={en} alt="kgz" />
          <h4>ENG</h4>
        </div>
      </div>
    </div>
  );
}

export default Translation;
