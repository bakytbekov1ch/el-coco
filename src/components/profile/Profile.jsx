import React, { useState } from "react";

import "./Profile.scss";
import ProfileOne from "../profile-1/ProfileOne";
import ProfileTwo from "../profile-2/ProfileTwo";

function Profile() {
  const [value, setValue] = useState("settings");

  function handlename(params) {
    setValue(params);
  }

  return (
    <div className="profile">
      <div className="container">
        <div className="profile__content">
          <div className="profile__avator">
            <div className="profile__btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/c/ce/Aang.png"
                alt=""
              />

              <div>
                <h1>Kalmamatov Elibek</h1>
                <h2>+996 507 111 669</h2>
              </div>
            </div>

            <nav className="profile__nav">
              <ul>
                <li onClick={() => handlename("settings")}>BookMark</li>
                <li onClick={handlename}>Settings</li>
              </ul>

              {value === "settings" ? <ProfileOne /> : <ProfileTwo />}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
