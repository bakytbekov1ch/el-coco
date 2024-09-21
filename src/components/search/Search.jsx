import React from "react";
import { IoMdSearch } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "./Search.scss";

const API = "https://669366b5c6be000fa07b6234.mockapi.io/el-coco";

function Search({ search, filterhandle, setSearch }) {
  const { t } = useTranslation();

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setSearch(API);
    } else {
      filterhandle(value);
    }
  };

  return (
    <div className="search">
      <div className="search__content">
        <div className="search__poisck">
          <input onChange={search} type="text" placeholder={t("search")} />
          <IoMdSearch className="xsearch__icon" />
        </div>
        <div className="search__filter">
          <select onChange={handleFilterChange}>
            <option value="all">{t("all")}</option>
            <option value="news">{t("new")}</option>
            <option value="stock">{t("stock")}</option>
            <option value="used">{t("used")}</option>
            <option value="laptop">{t("laptop")}</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
