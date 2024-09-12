import React, { useState } from "react";
import Basket from "../components/basket/Basket";
import Total from "../components/total/Total";
import Arrange from "../components/arrange/Arrange";
// import TitleBasket from "../components/basketTitle/TitleBasket";

function BasketPage() {
  const [items, setItems] = useState("items");

  function handleItems(str) {
    setItems(str);
  }

  return (
    <div>
      <Basket />
      {items ? (
        <Total handleItems={handleItems} />
      ) : (
        <Arrange handleItems={handleItems} />
      )}
      {/* <TitleBasket /> */}
    </div>
  );
}

export default BasketPage;
