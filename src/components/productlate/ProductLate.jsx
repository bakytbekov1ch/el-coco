import React from "react";

import "./ProductLate.scss";
import { useParams } from "react-router-dom";

function ProductLate() {
  const { id } = useParams();

  console.log(id);
  

  return (
    <div className="productlate">
      <div className="container">
        <div className="productlate__content">Hello My World</div>
      </div>
    </div>
  );
}

export default ProductLate;
