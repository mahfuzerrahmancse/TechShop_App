import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Services, Home, Products } from "./pages/index";
import { Footer } from "./shared/Footer";
import { Navbar } from "./shared/Navbar";
import { UserProvider } from "./userContext";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;
