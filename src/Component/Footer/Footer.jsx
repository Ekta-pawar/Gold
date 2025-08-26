import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const socialIcons = [
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ color: "#ffd700" }}
          >
            GoldPrice
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Providing real-time gold prices and investment insights.
          </motion.p>
        </div>

        <div className="footer-links">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ color: "#ffd700" }}
          >
            Quick Links
          </motion.h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{ color: "#ffd700" }}
          >
            Follow Us
          </motion.h3>
          <div className="social-icons">
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

        <div className="footer-contact">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            style={{ color: "#ffd700" }}
          >
            Contact Us
          </motion.h3>
          <ul>
            <li>Email:ektapawar001@gmail.com</li>
            <li>Phone:8527605645</li>
            <li>Address: 123 Gold Street, Gold City, GC 12345</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {new Date().getFullYear()} GoldPrice. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
