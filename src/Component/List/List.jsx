import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./List.css";

export default function MetalCards() {
  const [metals, setMetals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetals = async () => {
      try {
        const response = await axios.get("https://api.metalpriceapi.com/v1/latest", {
          params: {
            api_key: "9752b013f8b7a93cfe903dc129790bee",
            base: "USD",
          },
        });
        const data = response.data;
        const metalsArray = Object.entries(data.rates).map(([name, price]) => ({
          name,
          price,
          base: data.base,
          timestamp: data.timestamp,
        }));
        setMetals(metalsArray.slice(0, 12));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMetals();
  }, []);

  if (loading) return <p>Loading metals...</p>;
  if (error) return <p>Error: {error}</p>;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container">
      <h2 className="title">Metal Prices</h2>
      <motion.div
        className="grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {metals.map((metal) => (
          <motion.div key={metal.name} className="card" variants={cardVariants}>
            <Link to={`/metal/${metal.name}`} state={{ metal }}>
              <img
                src="https://img.icons8.com/color/48/000000/diamond.png"
                alt={metal.name}
                className="metal-image"
              />
              <h3 className="metal-name">{metal.name}</h3>
              <p className="metal-price">${metal.price}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
