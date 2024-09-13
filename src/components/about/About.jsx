import React from "react";
import { FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import group from "../../assets/images/group.png";

import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero
          distinctio, voluptatibus voluptas ipsum quo aliquid dolorum nihil
          natus blanditiis obcaecati cum, tenetur fuga in, maiores voluptates
          error rem soluta aut id maxime fugiat? Omnis distinctio harum
          veritatis labore quidem quo hic, totam nisi perspiciatis, temporibus
          quae unde ab soluta.
        </p>
        <div className="about__content">
          <div className="about__text">
            <h1 className="about__logo">el-coco</h1>
            <h2>Биздин башкы флиалыбыз.</h2>
            <h2>Чүй: 126</h2>

            <div className="about__icons">
              <TfiEmail className="about__icon"/>
              <h4>@kalmamatov@gmail.com</h4>
            </div>

            <div className="about__icons">
              <FaInstagram className="about__icon"/>
              <h4>@bakytbekovich_l9</h4>
            </div>

            <div className="about__icons">
              <FaWhatsapp className="about__icon"/>
              <h4>+996 507-11-16-69</h4>
            </div>
          </div>
          <img src={group} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
