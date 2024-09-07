import React from "react";

import "./ProfileTwo.scss";

function ProfileTwo() {
  return (
    <div className="profiletwo">
      <div>
        <div className="profiltwo__content">
          <img
            src="https://upload.wikimedia.org/wikipedia/ru/c/ce/Aang.png"
            alt=""
          />

          <h1>the.eli</h1>
          <h2>email@gmail.com</h2>
        </div>
        <div className="profiltwo__inputs">
          <input type="text" placeholder="nike name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="New Password" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileTwo;
