import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Skill from './Components/Skill/Skill';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Hero />
          <About />
          <Skill />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;