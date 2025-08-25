import React from "react";

import List from "./Component/List/List"
import Navbar from "./Component/Navbar/Navbar";
import Second from "./Component/Second/Second"
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Second/>
      <List/>
      <Footer/>
    </div>
  );
}

export default App;
