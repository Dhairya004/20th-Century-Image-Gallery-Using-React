import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BackgroundCard from './components/BackgroundCard';
import SlideShow from './components/SlideShow';
import CardHolder from './components/CardHolder';

function App() {
  // To style the background

  const titleStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    textAlign: 'center'
  }

return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<BackgroundCard title={<p style={titleStyle}><i>Images that describe the 20th Century</i></p>}/>}/>
        <Route path="/1900s" element={<SlideShow index="0"/>}/>
        <Route path="/1910s" element={<SlideShow index="1"/>}/>
        <Route path="/1920s" element={<SlideShow index="2"/>}/>
        <Route path="/1930s" element={<SlideShow index="3"/>}/>
        <Route path="/1940s" element={<SlideShow index="4"/>}/>
        <Route path="/1950s" element={<SlideShow index="5"/>}/>
        <Route path="/1960s" element={<SlideShow index="6"/>}/>
        <Route path="/1970s" element={<SlideShow index="7"/>}/>
        <Route path="/1980s" element={<SlideShow index="8"/>}/>
        <Route path="/1990s" element={<SlideShow index="9"/>}/>
      </Routes>
    </Router>
  </>
);
}

export default App;