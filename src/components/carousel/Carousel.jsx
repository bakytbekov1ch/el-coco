import React, { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/school_last_2880.webp",
    },
    {
      url: "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/del_2880_kg.webp",
    },
    {
      url: "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/2school_2880_nout.webp",
    },
  ];

  const slideStyle = {
    margin: "10px 0",
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "150px",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "35px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "35px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const nextIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div style={slideStyle}>
      <div style={leftArrow} onClick={goToPrevious}>
        <FaCircleArrowLeft />
      </div>
      <div style={slideStyles}></div>
      <div style={rightArrow} onClick={goToNext}>
        <FaCircleArrowRight />
      </div>
    </div>
  );
}

export default Carousel;
