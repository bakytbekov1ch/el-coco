import React from "react";

import "./Code.scss";
import { Link } from "react-router-dom";

function Code({ handleForgot }) {
  return (
    <div className="code">
      <div className="code__content">
        <h1>Забыли пароль</h1>
        <h2>Введите 6-значный код</h2>

        <p>
          На адрес электронной почты, который вы указали, должен был прийти
          четырехзначный код.
        </p>

        <div className="code__inputs">
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
        </div>

        <div className="code__buttons">
          <button onClick={() => handleForgot("forgot")}>Отмена</button>
          <button>
            <Link style={{ color: "white" }} to="/">
              Подтвердить
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Code;
