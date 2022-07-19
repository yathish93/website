import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Services from "./components/services";
import Practices from "./components/practices";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/practices" element={<Practices />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
