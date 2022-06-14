import React from "react";
import { Link } from "react-router-dom";
import "../Styles/modal.css";

const Modal = (props: any) => {
  return (
    <div className="container_modal">
      <div
        className="crossIcon"
        onClick={() => {
          props.onClickFun();
        }}
      >
        x
      </div>
      <div
        className="linkWrapper"
        onClick={() => {
          props.onClickFun();
        }}
      >
        <Link to="/resume" className="links1">
          Resume
        </Link>
        <Link to="/projects" className="links1">
          Projects
        </Link>
        <Link to="/contact" className="links1">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Modal;
