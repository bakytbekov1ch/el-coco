import React from "react";
import { BlockMocApi } from "../../data/data";

import "./Block.scss";
import { useTranslation } from "react-i18next";

function Block() {
  const { i18n } = useTranslation();

  function change(res) {
    let title;

    switch (i18n.language) {
      case "ky":
        title = res.name_ky;
        break;
      case "ru":
        title = res.name_ru;
        break;
      case "en":
        title = res.name_en;
        break;
    }

    return title;
  }

  return (
    <div className="block">
      <div className="container">
        <div className="block__content">
          {BlockMocApi.map((item, index) => (
            <div key={index} className="block__btn">
              <img src={item.image} alt={item.name_ru} />

              <h1>{change(item)}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Block;
