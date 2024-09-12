import React from "react";
import Home from "../app/home/Home";

function HomePage({ search, handleSearch }) {
  return (
    <div>
      <Home search={search} handleSearch={handleSearch} />
    </div>
  );
}

export default HomePage;
