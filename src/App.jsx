import React from "react";
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

function App() {

  return (
    <div>

      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
      </Routes>

    </div>
  )
}

export default App;
