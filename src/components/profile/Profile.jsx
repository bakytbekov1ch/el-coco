import React from "react";

import "./Profile.scss";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile">
      <div className="container">
        <div className="profile__content">
          <div className="profile__avator">
            <ul>
              <li>Kalmamatov Elibek</li>
              <li>/</li>
              <li>+996 507 11 669</li>
            </ul>

            <nav className="profile__nav">
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <li>BookMark</li>
                <li>Settings</li>
              </ul>
            </nav>

            <img
              src="https://upload.wikimedia.org/wikipedia/ru/c/ce/Aang.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
