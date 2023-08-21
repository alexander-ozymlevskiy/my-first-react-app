import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Navigation />
        <Container />
      </div>
    </div>
  );
}

export default App;
