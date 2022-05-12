import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import SingleHotel from "./pages/single/SingleHotel";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
