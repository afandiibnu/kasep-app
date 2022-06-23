import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Pages />
    </div>
  );
}

export default App;
