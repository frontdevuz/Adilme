import React from "react";
import "./App.css";
import Navbar from "./components/container/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Skill from "./pages/skills/skills";
import Work from "./pages/work/work";
import About from "./pages/about/about";
export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="skill/" element={<Skill />} />
        <Route path="work/" element={<Work />} />
      </Routes>
    </React.Fragment>
  );
}
