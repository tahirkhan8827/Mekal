import React from "react";
import logo from "../images/logo.png";
import "./Header.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light d-flex flex-column">
        <div className="container-fluid">
          <div className="logo">
            <img src={logo} className="w-100" alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="search-bar">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="contained">Search</Button>
            </form>
          </div>

          <Stack spacing={2} direction="row">
            <Button variant="contained" className="business-btn">
              Start Your Business
            </Button>
            <Button variant="contained" className="bg-success">
              <ShoppingCartIcon /> (9)
            </Button>
          </Stack>
        </div>

        {/* sub header start */}
        <div className="sub-header w-100 pt-4">
          <div className="container-fluid border border-2">
            <div
              className="collapse navbar-collapse"
              id="navbarCollapse navbar"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-md-0 fw-semibold sub-li">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    T-shirts
                  </a>
                  <div className="dropdown">
                    <ul type="none">
                      <li>half tshirt</li>
                      <li>full tshirt</li>
                      <li>half tshirt</li>
                      <li>full tshirt</li>
                      <li>half tshirt</li>
                      <li>full tshirt</li>
                      <li>half tshirt</li>
                      <li>full tshirt</li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    pilow
                  </a>
                  <div className="dropdown">
                    <ul type="none">
                      <li>half tshirt</li>
                      <li>full tshirt</li>
                      <li>half tshirt</li>
                      <li>full tshirt</li>
                      <li>half tshirt</li>
                      <li>full tshirt</li>
                      <li>half tshirt</li>
                      <li>full tshirt</li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shirts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Keychains
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
