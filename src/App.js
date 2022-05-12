import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Hotels from "./pages/hotel/Hotels";
import SingleHotel from "./pages/single/Hotel";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
