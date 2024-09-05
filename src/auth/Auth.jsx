import React, { useState } from "react";
import Login from "./login/Login";
import "./Auth.scss";
import Forgot from "./forgot/Forgot";

function Auth() {
  const [value, setValue] = useState("login");

  function handleClick(str) {
    setValue(str);
  }

  return (
    <div className="auth">
      <div className="container">
        <div className="auth__content">
          {value === "login" ? (
            <Login handleClick={handleClick} />
          ) : (
            <Forgot handleClick={handleClick} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
