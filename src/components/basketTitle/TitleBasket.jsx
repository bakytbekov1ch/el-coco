import React from "react";

import "./TitleBasket.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function TitleBasket() {
  const { t } = useTranslation();

  return (
    <div className="titlebasket">
      <div className="container">
        <div className="titlebasket__content">
          <h1>{t("basket")}</h1>

          <p>
            {t("text")}
            <Link to="/">
              <mark>{t("home")}</mark>
            </Link>
          </p>

          <h2>{t("title")}</h2>
        </div>
      </div>
    </div>
  );
}

export default TitleBasket;
