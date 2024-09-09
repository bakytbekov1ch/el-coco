import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baxa from "../../assets/video/baxa.mp4";

import "./ProductLate.scss";
import axios from "axios";

const API = "https://669366b5c6be000fa07b6234.mockapi.io/el-coco";

function ProductLate() {
  const { id } = useParams();
  const [main, setMain] = useState({});

  async function handleProduct() {
    try {
      const res = await axios.get(`${API}/${id}`);

      setMain(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(main.video);


  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <div className="productlate">
      <div className="container">
          <div className="productlate__content">
            <div className="productlate__video">
              <video controls autoPlay muted loop src={baxa}></video>
            </div>
            <hr />
            <div className="productlate__block">
              <p>Lorem ipsum dolor sit amet.</p>
              <h1>{main.name}</h1>
              <div className="productlate__price">
                <h4>{main.price} с</h4>
                <h5>1 шт</h5>
              </div>
              <h2>black, goold</h2>
              <div className="produclate__gb">
                <h3>{main.item}</h3>
                <h3>512ГБ</h3>
              </div>

              <p className="productlate__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                veritatis numquam enim recusandae adipisci suscipit?
              </p>

              <div className="productlate__h6">
                <h6>
                  <span>Адрес: </span>Bishkek ул.Абдыкадрова 204
                </h6>
                <h6>
                  <span>Менеджер:</span> +996 (507) 111 669
                  <span style={{ fontSize: "12px", letterSpacing: "0.3px" }}>
                    (Калмаматов Элибек)
                  </span>
                </h6>
              </div>

              <div className="productlate__buttons">
                <button style={{ background: "blue" }}>Купить</button>
                <button style={{ background: "green" }}>Корзина</button>
                <button style={{ background: "red" }}>Назад</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProductLate;
