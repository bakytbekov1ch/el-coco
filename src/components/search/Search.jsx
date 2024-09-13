import React from "react";
import { IoMdSearch } from "react-icons/io";

import "./Search.scss";
import { useTranslation } from "react-i18next";
const API = "https://669366b5c6be000fa07b6234.mockapi.io/el-coco";

function Search({ search, filterhandle, setSearch }) {
  const { t } = useTranslation();

  return (
    <div className="search">
      <div className="search__content">
        <div className="search__poisck">
          <input onChange={search} type="text" placeholder={t("search")} />
          <IoMdSearch className="search__icon" />
        </div>
        <div className="search__filter">
          <select name="#" id="">
            <option onClick={() => setSearch(API)} value="#">
              All
            </option>
            <option onClick={() => filterhandle("news")} value="#">
              {t("new")}
            </option>
            <option onClick={() => filterhandle("stock")} value="#">
              {t("stock")}
            </option>
            <option onClick={() => filterhandle("used")} value="#">
              {t("used")}
            </option>
            <option onClick={() => filterhandle("laptop")} value="#">
              {t("laptop")}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
