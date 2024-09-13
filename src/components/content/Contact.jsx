import React from "react";
import image from "../../assets/images/contact.png";
import { ContactData } from "../../data/data";
import line from "../../assets/svg/line.svg";

import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__content">
          <img className="image contact__image" src={line} alt="" />
          <div className="contact__block">
            <img src={image} alt="" />

            <div>
              {ContactData.map((item, index) => (
                <div key={index} className="contact__btn">
                  <img src={item.image} alt="" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact__inputs">
            <h1>Get in Touch</h1>
            <h3>Any question or remarks? Let us know!</h3>

            <div className="contact__teaxtare">
              <input type="text" placeholder="Enter your name" />
              <input type="text" placeholder="Enter your email" />
              <textarea
                name=""
                placeholder="Type your message here"
                id=""
              ></textarea>
              <button>Submit</button>
            </div>
          </div>
          <img className="image contact__img" src={line} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
