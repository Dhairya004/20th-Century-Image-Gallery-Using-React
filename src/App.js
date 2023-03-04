import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BackgroundCard from './components/BackgroundCard'
import SlideShow from './components/SlideShow'

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
        <Route path="/gallery" element={<SlideShow/>}/>
      </Routes>
    </Router>
  </>
);
}

export default App;