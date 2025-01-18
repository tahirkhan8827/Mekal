import React from "react";
import Slider from "react-slick";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import "./HomeSliderMachine.css";

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="slider-home">
      <div className="">
        <img src={img1} alt="" className="w-100" />
      </div>
      <div className="">
        <img src={img2} alt="" className="w-100" />
      </div>
      <div className="">
        <img src={img3} alt="" className="w-100" />
      </div>
    </Slider>
  );
};

export default HomeSlider;
