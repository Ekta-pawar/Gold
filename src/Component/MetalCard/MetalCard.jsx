import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./MetalCard.css";

export default function MetalDetail() {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const metal = location.state?.metal;

  if (!metal) {
    return (
      <div className="detail-container">
        <p>No details found for {name}</p>
        <button className="back-btn" onClick={() => navigate("/")}>⬅ Back</button>
      </div>
    );
  }

  return (
    <motion.div
      className="detail-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <button className="back-btn" onClick={() => navigate("/")}>⬅ Back</button>

      <div className="detail-card">
       
        <motion.div
          className="detail-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://img.icons8.com/color/160/000000/diamond.png"
            alt={metal.name}
          />
        </motion.div>

        {/* Right Side - Details */}
        <motion.div
          className="detail-info"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2>{metal.name} Details</h2>
          <p><strong>Price:</strong> ${metal.price}</p>
          <p><strong>Base Currency:</strong> {metal.base}</p>
          <p><strong>Timestamp:</strong> {metal.timestamp}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
