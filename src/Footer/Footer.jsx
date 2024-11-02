import React from "react";
import "./Footer.css";

import fimg from "./navimage.png";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-part">
      <footer>
        <div className="f-part-1">
          <img src={fimg} alt="" />
          <p>
            Small daily growth of a child gives great joy to a mother. We care
            and support every mother's deep affection for her children, and we
            strive to support them by providing quality and healthy products.
          </p>
        </div>
        <div className="f-part-2">
          <h1>Product</h1>
          <p>Bunny Extra Absorb Diapers</p>
          <p>Bunny All Night Absorb Diapers</p>
          <p>Bunny Standard Diapers</p>
          <p>Bunny New Born Diapers</p>
          <p>Bunny Preemie Diapers</p>
          <p>Bunny Wipes</p>
        </div>
        <div className="f-part-3">
          <h1>Quick Links</h1>
          <p>Diper</p>
          <p>New Born</p>
          <p>Lose diper</p>
          <p>Toddlers</p>
          <p>Products</p>
          <p>Pads</p>
        </div>
        <div className="f-part-4">
          <h3>Mandfacture By:</h3>
          <h1>EVERGREENCARE</h1>
          <p>Uttar Pradesh 221001</p>
          <p>Customer care:+917081627797</p>
          <p>For any feedback email at</p>
          <p>E-email:Evergreencare25@gmail.com</p>
        </div>
      </footer>
      <div className="f-social">
      <a href="https://www.facebook.com/niket.soni.58?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/niket.soni.58?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
        <IoLogoInstagram />
      </a>
      <a href="https://www.twitter.com/niket.soni.58?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
      <h1 className="copyright">Copyright © 2024 Desgin</h1>
    </div>
  );
}

export default Footer;
