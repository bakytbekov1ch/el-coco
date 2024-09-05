import React, { useState } from "react";
import "./Forgot.scss";
import Code from "../code/Code";

function Forgot({ handleClick }) {
  const [forgot, setForgot] = useState("forgot");

  function handleForgot(state) {
    setForgot(state);
  }

  return (
    <div className="forgot">
      {forgot === "forgot" ? (
        <div>
          <h1>Восстановление пароля</h1>
          <div className="forgot__content">
            <input type="text" placeholder="Email" />
            <h2 onClick={() => handleClick("login")}>Back</h2>
            <button onClick={handleForgot}>Recover</button>
          </div>
        </div>
      ) : (
        <Code handleForgot={handleForgot}/>
      )}
    </div>
  );
}

export default Forgot;
