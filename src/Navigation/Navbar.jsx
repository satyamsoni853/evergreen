import React, { useState } from "react";
import "./Navbar.css";
import Navimages from "./navimage.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [showsidebarr, setShowsidebarr] = useState(true);

  const handleHamBurger = () => {
    console.log(showsidebarr);

    setShowsidebarr(!showsidebarr);
  };
  return (
    <div>
      <div className="Navbarr">
        <ul>
          <li>
            <Link to="/home">EverGreenCare</Link>
          </li>
          <li className="nav-image">
            <img src={Navimages} alt="" />
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          <li className="cimenubarr" onClick={handleHamBurger}>
            {showsidebarr ? <CiMenuBurger /> : <IoCloseSharp />}
          </li>
        </ul>
      </div>
      {showsidebarr ? null : (
        <ul className="close-barr">
          <li>About</li>
          <li>Our product</li>
          <li>Loacation</li>
          <li>Contact us</li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
