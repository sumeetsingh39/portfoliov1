import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <About/>
      <Portfolio/>
      
    </div>
  );
}

export default App;
