import React from "react";
import NavigationBar from "./components/Navigationbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default App;
