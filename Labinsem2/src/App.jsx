import React from "react";


import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Counter from "./pages/Counter.jsx";
import Calculator from "./pages/Calculator.jsx";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/counter">Counter</Link>
        {" | "}
        <Link to="/calculator">Calculator</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
