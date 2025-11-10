import React from "react";
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import You from "./Pages/You";
import About from "./pages/About";
import Saved from "./Pages/Saved";

function App() {

  return (
    <div>

      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />

          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/you" element={<You />} />
          </Route>
      </Routes>

    </div>
  )
}

export default App;
