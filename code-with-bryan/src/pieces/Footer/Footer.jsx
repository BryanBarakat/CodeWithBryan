import React from "react";
import github from "../../assets/github2.png";
import instagram from "../../assets/instagram2.png";
import linkedin from "../../assets/linkedin2.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="images-footer">
        <a target="_blank" href="https://github.com/BryanBarakat">
          <img src={github}></img>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/bryan-naoum-barakat-6797b0205"
        >
          <img src={linkedin}></img>
        </a>
        <a target="_blank" href="https://www.instagram.com/bryanbarakat/">
          <img src={instagram}></img>
        </a>
      </div>
      <div className="copyright-footer">
        <h3>copyright © Code with Bryan</h3>
      </div>
    </div>
  );
};
