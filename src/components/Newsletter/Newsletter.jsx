import React from "react";
import "./Newsletter.css";
import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1>NewsLetter</h1>
      <div className="newsletter-description">
        Be the first to know about the latest news and exclusive offers from us.
      </div>
      <div className="newsletter-input-container">
        <input type="email" placeholder="Enter Your Email..." />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
