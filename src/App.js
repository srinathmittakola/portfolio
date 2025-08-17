import React,{useEffect } from 'react';
import './App.css';

import Navbar from './components/NavBar';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  

  
useEffect(() => {
    // Select all elements in body
    const elements = document.querySelectorAll("section *");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      el.classList.add("fade-in-up");
      observer.observe(el);
    });
  }, []);
  return (
    <div className="App">
      <video autoPlay loop muted playsInline className="background-video">
            <source src="bg.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
    </video>
      <Navbar/>
      <Profile/>
      <AboutMe/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
