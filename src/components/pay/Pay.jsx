import React, { useState } from "react";
import Success from "../success/Success";
import "../arrange/Arrange.scss";

function Pay({ handleItems }) {
  const [success, setSuccess] = useState("success");

  function handleClick(arr) {
    setSuccess(arr);
  }

  return (
    <div className="arrange">
      <div className="container">
        {success ? (
          <div className="arrange__content">
            <div className="arrange__inputs">
              <label htmlFor="#">User Name</label>
              <input type="text" placeholder="User Name" />
            </div>

            <div className="arrange__inputs">
              <label htmlFor="#">Phone Number</label>
              <input type="text" placeholder="Phone Number" />
            </div>

            <div className="arrange__inputs">
              <label htmlFor="#">Email</label>
              <input type="text" placeholder="Email" />
            </div>

            <div className="arrange__inputs">
              <label htmlFor="#">Reviews</label>
              <textarea name="" placeholder="Reviews" id=""></textarea>
            </div>

            <div className="arrange__select">
              <label htmlFor="#">Address</label>
              <select name="#" id="">
                <option value="#">Osh</option>
                <option value="#">Ysyk-Kol</option>
                <option value="#">Batken</option>
                <option value="#">Bishkek</option>
                <option value="#">Jalal-Abad</option>
              </select>
            </div>

            <div className="arrange__inputs">
              <label htmlFor="#">Check</label>
              <input
                style={{ border: "none" }}
                type="file"
                placeholder="Check"
              />
            </div>

            <button onClick={() => handleClick()}>Submit</button>
            <button
              onClick={() => handleItems("items")}
              style={{ background: "red", color: "white" }}
            >
              Exit
            </button>
          </div>
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
}

export default Pay;
