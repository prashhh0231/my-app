import React from "react";
import "../Styles/resume.css";

import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";

const Resume = () => {
  return (
    <div>
      <p className="title_text">Resume</p>
      <div className="work_container">
        <div className="work_text">
          <BsFillBriefcaseFill />
          {"  "}Work experience
        </div>
        <div className="work_container_wrapper">
          <div className="experience_cotainer">
            <div className="exp_date">10/2021 - Present</div>
            <div className="work_details">
              <span className="designation">
                Trainee Software Engineer
                <br />
                <span style={{ fontSize: "16px" }}>
                  e-Zest Solution, Pune Maharashtra
                </span>
              </span>
              <p style={{ fontSize: "14px" }}>
                <span>
                  Developed front-end of web app as well as cross platform
                  mobile application using React and React Native + Typescript
                  <br /> <br />
                  Working on e-commerce cross platform mobile app with React
                  Native + Typescript.Created UI
                  <br /> <br />
                  Reusable components for future uses and involved in
                  integrating UI with API and loading data using REST and
                  graphQL
                  <br />
                  <br />
                  Performing Client build Releases and Bug Fixes
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="work_container">
        <div className="work_text">
          <span style={{ fontSize: "30px" }}>
            {" "}
            <MdSchool />
          </span>
          {"  "}Education
        </div>
        <div className="work_container_wrapper">
          <div className="experience_cotainer">
            <div className="exp_date">08/2016 - 08/2021</div>
            <div className="work_details">
              <span className="designation">
                Bachelor of Engineering (CSE)
                <br />
                <span style={{ fontSize: "16px" }}>
                  Prof. Ram Meghe Institute of Technology and Research, Badnera
                </span>
              </span>
              <p>
                <i style={{ fontSize: "14px" }}>
                  CGPA - 9.93 <br />
                </i>
                <span style={{ color: "#edebeb" }}>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double
                </span>
              </p>
            </div>
          </div>
          <div className="experience_cotainer">
            <div className="exp_date">06/2014 - 07/2015</div>
            <div className="work_details">
              <span className="designation">
                Senior Secondary (XII): Science
                <br />
                <span style={{ fontSize: "16px" }}>
                  {" "}
                  Rangnath Maharaj junior college, Waghrul
                </span>
              </span>
              <p>
                <i style={{ fontSize: "14px" }}>
                  Percentage - 68.77 <br />
                </i>
                <span style={{ color: "#edebeb" }}>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double
                </span>
              </p>
            </div>
          </div>
          <div className="experience_cotainer">
            <div className="exp_date">06/2012 - 07/2013</div>
            <div className="work_details">
              <span className="designation">
                Secondary School (X)
                <br />
                <span style={{ fontSize: "16px" }}>
                  Deulgaon raja HighSchool Deulgaon raja
                </span>
              </span>
              <p>
                <i style={{ fontSize: "14px" }}>
                  Percentage - 78.40 <br />
                </i>
                <span style={{ color: "#edebeb" }}>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <p className="hr" />
      <div className="work_container">
        <div className="work_text">Skill & Experties</div>
        <div className="skills_wrapper">
          <div>
            <span>&#9679; </span> HTML, CSS, Javascript, ES6, Typescript, C++
          </div>
          <div>
            <span>&#9679; </span> React, React-Hooks, Redux, React Native
          </div>
          <div>
            <span>&#9679; </span> Material UI, Bootstrap
          </div>
          <div>
            <span>&#9679; </span>Git, npm
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Resume;
