import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/breaking-news" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
