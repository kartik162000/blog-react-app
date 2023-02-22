import React from "react";
import Navbar from "./components/Navbar/Navbar"; // Import
import Footer from "./components/Footer/Footer"; // Import
import MainBody from "./components/MainBody/MainBody"; // Import
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
