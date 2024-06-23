import React, { useState } from "react";
import NavigationBar from "./components/Navigationbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import Activities from "./components/Activities";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`} data-bs-theme={theme}>
      <NavigationBar toggleTheme={toggleTheme} currentTheme={theme} />
      <Home toggleTheme={toggleTheme} currentTheme={theme} />
      <About />
      <Skills />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
