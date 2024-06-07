import React from "react";
import NavigationBar from "./Navigationbar";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Home />
      <About />
    </div>
  );
};

export default App;
