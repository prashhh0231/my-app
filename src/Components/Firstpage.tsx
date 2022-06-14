import React from "react";
import { Link } from "react-router-dom";
import "../Styles/firstpage.css";

const Firstpage = () => {
  return (
    <div className="first_page_container">
      <div className="profile_image">
        <img
          src={require("../image/pj.jpg")}
          alt="Tinder cline Image"
          className="image"
        />
      </div>
      <div className="summary_wrapper">
        <div className="firstpage_heading">Hello</div>
        <div className="sub_heading">A Bit About Me</div>
        <div>
          Innovative front end developer with experience in building and
          maintaining web app and cross platform mobile app using React native +
          Typescript. Proficient in HTML,CSS,Javascript using modern library
          such as React JS and React Native. Love bringing designs to life and
          creating, usable experiences for all users. Excellent team player with
          global mindset.
        </div>
        <div className="button_wrapper">
          <Link to="/resume" className="nav_link1">
            <button className="buttons color1">Resume</button>
          </Link>

          <Link to="/projects" className="nav_link1">
            <button className="buttons color2">Project</button>
          </Link>

          <Link to="/contact" className="nav_link1">
            <button className="buttons color3">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
