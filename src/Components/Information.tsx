import React from "react";
import "../Styles/information.css";
import Contact from "./Contact";
import Firstpage from "./Firstpage";
import Resume from "./Resume";
import Projects from "./Projects";

import { Routes, Route } from "react-router-dom";

const Information = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Information;
