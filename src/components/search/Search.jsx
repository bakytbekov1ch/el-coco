import React from "react";
import { IoMdSearch } from "react-icons/io";

import "./Search.scss";

function Search() {
  return (
    <div className="search">
      <div className="search__content">
        <div className="search__poisck">
          <input type="text" placeholder="Товарды издөө" />
          <IoMdSearch className="search__icon" />
        </div>
        <div className="search__filter">
          <select name="#" id="">
            <option value="#">News</option>
            <option value="#">Stock</option>
            <option value="#">Колдонулган</option>
            <option value="#">Laptop</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
