import React from "react";
import kyrgyz from "../../assets/images/ky.png";
import russian from "../../assets/images/ru.png";
import english from "../../assets/images/en.png";
import { useTranslation } from "react-i18next";
import "./Translation.scss";

function Translation() {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="translation">
      <div>
        <div
          onClick={() => changeLang("ky")}
          className="btn-tr translation__ky"
        >
          <img src={kyrgyz} alt="kgz" />
          <h4>KGZ</h4>
        </div>
        <div
          onClick={() => changeLang("ru")}
          className="btn-tr translation__ru"
        >
          <img src={russian} alt="ru" />
          <h4>RUB</h4>
        </div>
        <div
          onClick={() => changeLang("en")}
          className="btn-tr translation__en"
        >
          <img src={english} alt="en" />
          <h4>ENG</h4>
        </div>
      </div>
    </div>
  );
}

export default Translation;
