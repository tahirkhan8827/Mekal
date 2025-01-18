import React from "react";
import logo from "../images/logo.png";
import "./Header.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Slider from "react-slick";


import HomeSlider from "./HomeSlider";
import HomeMachineImg from "./HomeMachineImg";



const OffiMekal = () => {
  
  return (
    <header>
      <div className="bg-warning py-2">
        <div className="container d-flex justify-content-between">
          <a href="#" className="text-white text-decoration-none">
            ENQUIRY
          </a>
          <a href="#" className="text-white text-decoration-none">
            GET THE SAMPLE
          </a>
          <a href="#" className="text-white text-decoration-none">
            SUBSCRIBE US
          </a>
          <a href="#" className="text-white text-decoration-none">
            CONTACT US
          </a>
          <a href="#" className="text-white text-decoration-none">
            FAQS
          </a>
        </div>
      </div>
      <div className="container-fluid nav-container bg-white my-2 py-2">
        <div className="row align-items-center justify-content-around">
          <div className="col-1">
            <img src={logo} className="w-100" alt="" />
          </div>
          <div className="col-4 d-flex search-categ">
            <input
              type="search"
              placeholder="search here...."
              className="w-100 border px-3 border-none search"
            />
            <select className="form-select w-auto categ">
              <option defaultValue={0}>SELECT CATEGORY</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
            </select>
          </div>
          <div className="col-1 d-flex p-1">
            <a className="pe-1" href="">
              Login
            </a>{" "}
            /
            <a href="" className="ps-1">
              signup
            </a>
          </div>
          <div className="col-2 d-flex justify-content-around">
            <div className="wishlist">
              <Button variant="contained" className="">
                <FavoriteBorderOutlinedIcon /> (9)
              </Button>
            </div>
            <div className="share-product">
              <Button variant="contained" className="">
                <ShareIcon /> (9)
              </Button>
            </div>
          </div>
          <div className="col-1">
            <Button variant="contained" className="">
              <ShoppingCartIcon /> (9)
            </Button>
          </div>
          <div className="col-2">
            <Button variant="contained" className="business-btn">Start Your Business</Button>
          </div>
        </div>
      </div>
      <div className="container-fluid sub-header my-2">
        <div className="row">
          <div className="col-2 d-flex align-items-center p-0 border border-1 fw-bold mx-4 browse">
            <Button className="browse-btn text-white w-100 h-100 p-0">
              Browse Categories
            </Button>
          </div>
          <div className="col-lg-6 ">
            <ul
              className="sub-header-ul d-flex justify-content-around align-items-center my-2 p-1"
              type="none"
            >
              <li>Home</li>
              <li>About</li>
              <li>Mug</li>
              <li>T-Shirt</li>
              <li>Pilow</li>
              <li>More Products</li>
            </ul>
          </div>
          {/* <div className="col-3 d-flex">
              <Button variant="contained">Start Your Business</Button>
            </div> */}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row ">
          <div
            className="col-2"
            style={{ paddingLeft: "23px", marginTop: "-6px"}}
          >
            <div className="browse-dropdown">
              <ul type="none" className="p-0">
                <li>
                  APPARELS
                  <div className="apparels d-flex">
                    <div className="inside-apparels">
                      <h4>t-shirt</h4>
                      <div class="elementor-widget-container">
                        <ul class="sub-sub-menu">
                          <li class="item-with-label item-label-primary">
                            <a href="">Polo Tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Round Neck T-shirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Event tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Promotional tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Election tshirt</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="inside-apparels">
                      <h4>t-shirt</h4>
                      <div class="elementor-widget-container">
                        <ul class="sub-sub-menu">
                          <li class="item-with-label item-label-primary">
                            <a href="">Polo Tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Round Neck T-shirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Event tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Promotional tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Election tshirt</a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                    <div className="inside-apparels">
                      <h4>t-shirt</h4>
                      <div class="elementor-widget-container">
                        <ul class="sub-sub-menu">
                          <li class="item-with-label item-label-primary">
                            <a href="">Polo Tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Round Neck T-shirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Event tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Promotional tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Election tshirt</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="inside-apparels">
                      <h4>t-shirt</h4>
                      <div class="elementor-widget-container">
                        <ul class="sub-sub-menu">
                          <li class="item-with-label item-label-primary">
                            <a href="">Polo Tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Round Neck T-shirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Event tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Promotional tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Election tshirt</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>COMBO GIFT SETS</li>
                <li>ECO-FRIENDLY GIFTS</li>
                <li>GADGET & TECH</li>
                <li>OFFICE STATIONERY</li>
                <li>HOME & APPLIANCES</li>
                <li>GADGET & TECH</li>
                <li>
                  TROPHY & AWARDS
                  <div className="apparels d-flex">
                    <div className="inside-apparels">
                      <h4>t-shirt</h4>
                      <div class="elementor-widget-container">
                        <ul class="sub-sub-menu">
                          <li class="item-with-label item-label-primary">
                            <a href="">Polo Tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Round Neck T-shirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Event tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Promotional tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Election tshirt</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="inside-apparels">
                      <h4>t-shirt</h4>
                      <div class="elementor-widget-container">
                        <ul class="sub-sub-menu">
                          <li class="item-with-label item-label-primary">
                            <a href="">Polo Tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Round Neck T-shirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Event tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Promotional tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Election tshirt</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="inside-apparels">
                      <h4>t-shirt</h4>
                      <div class="elementor-widget-container">
                        <ul class="sub-sub-menu">
                          <li class="item-with-label item-label-primary">
                            <a href="">Polo Tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Round Neck T-shirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Event tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Promotional tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Election tshirt</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="inside-apparels">
                      <h4>t-shirt</h4>
                      <div class="elementor-widget-container">
                        <ul class="sub-sub-menu">
                          <li class="item-with-label item-label-primary">
                            <a href="">Polo Tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Round Neck T-shirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Event tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Promotional tshirt</a>
                          </li>

                          <li class="item-with-label item-label-primary">
                            <a href="">Election tshirt</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>OFFICE ACCESSORIES</li>
              </ul>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-6" style={{paddingInline:"30px",}}>
            <HomeSlider/>
          </div>
          <div className="col-3 d-flex flex-column" style={{paddingInline:'50px',gap:'5px'}}>
            <HomeMachineImg/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OffiMekal;
