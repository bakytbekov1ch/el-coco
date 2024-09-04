import React from "react";
import { useTranslation } from "react-i18next";
import { IoMdSearch } from "react-icons/io";
import "./FirstSearch.scss";

function FirstSearch() {
  const { t } = useTranslation();

  return (
    <div className="firstsearch">
      <div className="container">
        <div className="firstearch__input">
          <input type="text" placeholder={t("search")} />
          <IoMdSearch className="firstsearch__icon" />
        </div>
        <div className="firstsearch__content"></div>
      </div>
    </div>
  );
}

export default FirstSearch;
