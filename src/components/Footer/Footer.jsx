import React from "react";
import "./Footer.css";
import {
  Facebook,
  YouTube,
  Instagram,
  Map,
  Mail,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-left">
          <h2>CONTACT</h2>
          <div className="footer-contact">
            <Map style={{ marginRight: "10px" }} />
            This Is Our Office
          </div>
          <div className="footer-contact">
            <Phone style={{ marginRight: "10px" }} />
            +852 1234 5678
          </div>
          <div className="footer-contact">
            <Mail style={{ marginRight: "10px" }} />
            contact@gmail.com
          </div>
        </div>
        <div className="footer-center">
          <h2>GET HELP</h2>
          <div className="footer-get-help">
            <div className="footer-get-help-left">
              <p>News Center</p>
              <p>Online Shopping</p>
              <p>Order Status</p>
            </div>
            <div className="footer-get-help-right">
              <p>Returns</p>
              <p>Shipping and Delivery</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <h2>SOCIAL</h2>
          <div className="footer-social-media-container">
            <div className="footer-social-media">
              <Facebook />
            </div>
            <div className="footer-social-media">
              <YouTube />
            </div>
            <div className="footer-social-media">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-credit">Made by Calvin Ho 2023</div>
    </div>
  );
};

export default Footer;
