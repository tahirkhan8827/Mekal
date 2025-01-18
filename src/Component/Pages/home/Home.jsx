import React from "react";
import "./Home.css";
import Slider from "react-slick";
import img1 from "../../../images/1.jpeg";
import img2 from "../../../images/2.jpeg";
import img3 from "../../../images/3.jpeg";
import img4 from "../../../images/4.jpeg";
import img5 from "../../../images/5.jpeg";
import img6 from "../../../images/6.jpeg";
import img7 from "../../../images/7.jpeg";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
    // fade: false,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings} className="slider-style">
        <div className="item">
        </div>
        <div className="item">

        </div>
        <div className="item">

        </div>
        <div className="item">

        </div>
        <div className="item">

        </div>
        <div className="item">

        </div>
        <div className="item">

        </div>
        <div className="item">

        </div>
        <div className="item">

        </div>
        <div className="item">

        </div>
      </Slider>
    </>
  );
};

export default Home;
