import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Prices", "About", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/138/138281.png"
            alt="Gold Logo"
            className="logo-img"
          />
          <h1 className="logo-text">Gold</h1>
        </motion.div>

       
        <ul className="menu">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="menu-item"
            >
              {item}
            </motion.li>
          ))}
        </ul>

     
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? (
            <span className="close-icon">&times;</span> 
          ) : (
            <span className="menu-icon">&#9776;</span> 
          )}
        </div>
      </div>

     
      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="mobile-menu"
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 5 }}
              className="mobile-menu-item"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
