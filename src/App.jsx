import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import List from "./Component/List/List"
import Navbar from "./Component/Navbar/Navbar";

import Second from "./Component/Second/Second"
import Footer from "./Component/Footer/Footer";
import MetalCard from "./Component/MetalCard/MetalCard";
function App() {
  return (
    <div>
      <Navbar/>
      <Second/>
          <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/metal/:name" element={<MetalCard/>} />
      </Routes>
    </Router>

      <Footer/>
    </div>
  );
}

export default App;
