import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
