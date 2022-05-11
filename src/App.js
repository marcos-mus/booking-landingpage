import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/hotels" element={<Hotel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
