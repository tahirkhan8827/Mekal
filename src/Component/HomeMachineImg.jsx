import React from "react";
import img5 from "../images/5.jpeg";
import img7 from "../images/7.jpeg";
import './HomeSliderMachine.css'
const HomeMachineImg = () => {
  return (
    <>
      <div className="img-1">
        <img src={img7} alt="" className="w-100" />
      </div>
      <div className="img-2">
        <img src={img5} alt="" className="w-100" />
      </div>
    </>
  );
};

export default HomeMachineImg;
