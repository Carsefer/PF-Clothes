import React from "react";
import LandingHome from "./components/LandingHome/LandingHome";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingHome />} />
    </Routes>
  );
}

export default App;
