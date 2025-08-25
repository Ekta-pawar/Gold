import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-brand">
          <h2>GoldPrice</h2>
          <p>Providing real-time gold prices and investment insights.</p>
        </div>

     
        <div className="footer-social">
          {socialIcons.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#ffd700" }}
              whileTap={{ scale: 0.9 }}
              className="social-icon"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>{new Date().getFullYear()} GoldPrice. All rights reserved.</p>
      </div>
    </footer>
  );
}
