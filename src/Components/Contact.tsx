import React from "react";
import "../Styles/contact.css";
import {
  AiFillPhone,
  AiFillMail,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
const Contact = () => {
  return (
    <div className="contact_container">
      <h1>Contact</h1>
      <span className="txt1">Looking forword to hearing from you</span>
      <br />
      <br />
      <div>
        <div className="contactIcons">
          <span className="mediumIcon">
            <AiFillMail />
          </span>
          <span className="txt"> jawaleprashant830@gmail.com</span>
          <br />
          <br />
        </div>
        <div>
          <span className="mediumIcon">
            <AiFillPhone />
          </span>
          <span className="txt"> 7559379412</span>
          <br /> <br />
        </div>
      </div>
      <div>
        <span className="extraIcon">
          <a href="" className="githubIcon">
            <AiOutlineGithub />
          </a>
        </span>
        <span className="extraIcon">
          <a
            href="https://www.linkedin.com/mwlite/in/prashhh0231"
            className="githubIcon"
          >
            <AiFillLinkedin />
          </a>
        </span>
        <span className="extraIcon">
          <a href="mailto:" className="githubIcon">
            <AiFillInstagram />
          </a>
        </span>
        <span className="extraIcon">
          <a href="mailto:" className="githubIcon">
            <AiFillFacebook />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
