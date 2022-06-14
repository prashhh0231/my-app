import React, { useEffect, useState } from "react";
import "../Styles/headers.css";
import { BsBorderWidth } from "react-icons/bs";
import { Link } from "react-router-dom";

const Headers = (props: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  return (
    <div className="main_container">
      <div className="name_container">
        <p className="dot" />
        <p className="userName">
          <Link to="/" className="nav_link">
            Prashant Jawale
          </Link>
        </p>
        <p className="designation1">Software Engineer</p>
      </div>
      <div className="links">
        {isMobile ? (
          <p
            className="moreIcon"
            onClick={() => {
              props.onClickFun();
            }}
          >
            <BsBorderWidth />
          </p>
        ) : (
          <div className="nav_link_container">
            <p className="nav_link">
              <Link to="/resume" className="nav_link">
                Resume
              </Link>
            </p>
            <p className="line" />
            <p className="nav_link">
              <Link to="/projects" className="nav_link">
                Projects
              </Link>
            </p>
            <p className="line" />
            <p className="nav_link">
              <Link to="/contact" className="nav_link">
                Contact
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headers;
