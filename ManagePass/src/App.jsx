import "./App.css";

import Footer from "./components/Footer";
import Manager from "./components/Manager";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
        <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App;
