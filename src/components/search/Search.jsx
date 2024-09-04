import React from "react";
import { IoMdSearch } from "react-icons/io";

import "./Search.scss";
import { useTranslation } from "react-i18next";

function Search() {
  const { t } = useTranslation();

  return (
    <div className="search">
      <div className="search__content">
        <div className="search__poisck">
          <input type="text" placeholder={t("search")} />
          <IoMdSearch className="search__icon" />
        </div>
        <div className="search__filter">
          <select name="#" id="">
            <option value="#">{t("new")}</option>
            <option value="#">{t("stock")}</option>
            <option value="#">{t("used")}</option>
            <option value="#">{t("laptop")}</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
