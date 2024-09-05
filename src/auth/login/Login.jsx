import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Register from "../register/Register";

import "./Login.scss";

function Login({ handleClick }) {
  const [login, setLogin] = useState("login");

  function LoginClick(params) {
    setLogin(params);
  }

  return (
    <div className="login">
      <div className="container">
        {login === "login" ? (
          <div className="login__content">
            <h2>You must sign in to join</h2>
            <h4>We're a Team Cuides Each Other</h4>
            <div className="login__icons">
              <div className="login-google">
                <FcGoogle />
                <h3>Sign in with Google</h3>
              </div>

              <div className="login-google">
                <FaApple />
                <h3>Sign in with Apple id</h3>
              </div>

              <div className="login-or">
                <div className="login-hr"></div>
                <h3>Or</h3>
                <div className="login-hr"></div>
              </div>
            </div>

            <div className="login__inputs">
              <input type="text" placeholder="Никнейм" />
              <input type="text" placeholder="Uname@gmail.com" />
              <input type="password" placeholder="Password" />
              <h3 onClick={handleClick}>Forgot Password?</h3>
            </div>
            <button>Submit</button>
            <p>
              Don't have an account?
              <span onClick={LoginClick}> Sign up</span>
            </p>
          </div>
        ) : (
          <Register LoginClick={LoginClick}/>
        )}
      </div>
    </div>
  );
}

export default Login;
