import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Photos from "./Components/Photoes";
import Navbar from "./Components/Navbar";
import EventCard1 from "./Components/Eventcard";
import Log from "./Components/Login";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/Eventcard1" element={<EventCard1 />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
