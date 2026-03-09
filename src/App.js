import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// Import your images
import homeBg from "./images/home_images/billboard.png";
import galleryBg from "./images/home_images/rr.jfif";
import './App.css';
import BackgroundCard from "./components/BackgroundCard";
import SlideShow from "./components/SlideShow";


const AppContent = () => {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState(homeBg);

  useEffect(() => {
    switch (location.pathname) {
      case "/1900s":
      case "/1910s":
      case "/1920s":
      case "/1930s":
      case "/1940s":
      case "/1950s":
      case "/1960s":
      case "/1970s":
      case "/1980s":
      case "/1990s":
        setBackgroundImage(galleryBg);
        break;
      default:
        setBackgroundImage(homeBg);
        break;
    }
  }, [location.pathname]); // Re-run when pathname changes

  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center 35%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: 0,
    margin: 0,
    width: "100%",
    minHeight: "100vh",
  };

  return (
    <div style={appStyle} className="app-content">
      <div className="app-routes">
        <Routes>
          <Route path="/" element={<BackgroundCard />} />
          <Route path="/1900s" element={<SlideShow index="0"/>} />
          <Route path="/1910s" element={<SlideShow index="1"/>} />
          <Route path="/1920s" element={<SlideShow index="2"/>} />
          <Route path="/1930s" element={<SlideShow index="3"/>} />
          <Route path="/1940s" element={<SlideShow index="4"/>} />
          <Route path="/1950s" element={<SlideShow index="5"/>} />
          <Route path="/1960s" element={<SlideShow index="6"/>} />
          <Route path="/1970s" element={<SlideShow index="7"/>} />
          <Route path="/1980s" element={<SlideShow index="8"/>} />
          <Route path="/1990s" element={<SlideShow index="9"/>} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  )
};

export default App;
