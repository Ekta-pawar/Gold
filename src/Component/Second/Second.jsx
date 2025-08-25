import React from "react";
import { motion } from "framer-motion";
import "./Second.css";

export default function Second() {

  const lines = [
    "24 Karat Gold",
    "24 Karat gold is the purest form of gold, widely used in jewelry and investment.",
    "Its value fluctuates daily based on international markets and currency exchange rates.",
    "Investing in pure gold ensures long-term value and stability."
  ];

  return (
    <div className="gold">
      <div className="overlay">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className={index === 0 ? "heading" : "text"}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
