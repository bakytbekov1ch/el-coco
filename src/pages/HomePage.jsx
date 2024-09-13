import React from "react";
import Home from "../app/home/Home";

function HomePage({ search, handleSearch, filterhandle, setSearch }) {
  return (
    <div>
      <Home
        setSearch={setSearch}
        search={search}
        handleSearch={handleSearch}
        filterhandle={filterhandle}
      />
    </div>
  );
}

export default HomePage;
