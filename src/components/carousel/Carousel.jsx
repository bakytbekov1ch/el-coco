import React, { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import "./Carousel.scss";

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

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
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
    <div className="style">
      <div className="styleBTn leftArrow" onClick={goToPrevious}>
        <FaCircleArrowLeft />
      </div>
      <div className="styleSlide" style={slideStyles}></div>
      <div className="styleBTn rightArrow" onClick={goToNext}>
        <FaCircleArrowRight />
      </div>
    </div>
  );
}

export default Carousel;
