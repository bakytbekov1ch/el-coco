import React from "react";
import { CarouselData } from "../../data/data";
import { Carousel } from "antd";
const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

import "./Carousel.scss";

function CustomCarousel() {
  return (
    <div className="styles">
      <Carousel autoplay>
        {CarouselData.map((item, index) => (
          <div className="styles__content">
            <img key={index} style={contentStyle} src={item.image} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
