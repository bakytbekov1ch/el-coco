import React from "react";

import "./Register.scss";

function Register({ LoginClick }) {
  return (
    <div className="register">
      <div className="container">
        <div className="register__content">
          <h2>You must sign in to join</h2>
          <h4>We're a Team Cuides Each Other</h4>

          <div className="register__inputs">
            <input type="text" placeholder="Uname@gmail.com" />
            <input type="password" placeholder="Password" />
            <h3>Forgot Password?</h3>
          </div>
          <button>Submit</button>
          <p>
            Don't have an account?
            <span onClick={() => LoginClick("login")}> Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
