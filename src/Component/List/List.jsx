import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MetalsList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.metals.dev/v1/latest", {
          params: {
            api_key: "CIDNWLO9NFSWZOLVMPW6681LVMPW6",
            currency: "USD",
            unit: "toz",
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  const usdToInr = data?.currencies?.INR || 0;
  const metalsInInr = {};
  if (data?.metals) {
    for (const [metal, priceUsd] of Object.entries(data.metals)) {
      metalsInInr[metal] = (priceUsd * usdToInr).toFixed(2);
    }
  }

 
 
  const todayDate = new Date(data?.timestamp).toLocaleDateString();
  const todayTime = new Date(data?.timestamp).toLocaleTimeString();


  return (
    <div style={{ padding: "20px" }}>
      <h2>Metals Prices</h2>
      <p>
        <strong>Date:</strong> {todayDate}
      </p>
      <p>
        <strong>Time:</strong> {todayTime}
      </p>

      {Object.entries(metalsInInr).map(([metal, priceInr]) => (
        <div
          key={metal}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{metal.toUpperCase()}</h3>
          <p>
         USD: {data.metals[metal]} <br />
            INR: {priceInr}
          </p>
          <p>
            Open Price: {data.metals[metal]} 
           
          </p>
        </div>
      ))}
    </div>
  );
}
