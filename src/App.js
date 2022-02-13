import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Switcher from "././pages/Switcher";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:slug' element={<Switcher />} />
      </Routes>
    </Router>
  );
}

export default App;
