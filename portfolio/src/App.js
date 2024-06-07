import React from "react";
import NavigationBar from "./components/Navigationbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
