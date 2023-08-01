import React, { useRef, useEffect } from "react";
import sharp from "../../assets/c-sharp.png";
import css from "../../assets/css-3.png";
import git from "../../assets/git (1).png";
import html from "../../assets/html.png";
import java from "../../assets/java.png";
import js from "../../assets/js.png";
import microsoft from "../../assets/microsoft (1).png";
import mysql from "../../assets/mysql.png";
import php from "../../assets/php.png";
import python from "../../assets/python.png";
import react from "../../assets/physics.png";
import mongo from "../../assets/mongodb.png";
import node from "../../assets/node-js.png";
import unity from "../../assets/unity.png";
import vscode from "../../assets/visual-studio.png";
import xampp from "../../assets/xampp.png";
import { useParams } from "../../Context/Context";
import "./Technologies.css";

export const Technologies = () => {
  const { skillsRef } = useParams();
  const skillRefContainer = useRef(null);

  // Intersection Observer callback function
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillRefContainer.current.classList.add("animateTech");
        // Unobserve the element once the animation is triggered
        observer.unobserve(entry.target);
      }
    });
  };

  // Create an Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust the threshold as needed for the trigger point
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (skillRefContainer.current) {
      observer.observe(skillRefContainer.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="tech-container" ref={skillsRef}>
      <div className="header-tech">
        <div className="title-tech-container">
          <h3>TECHNOLOGIES</h3>
        </div>
        <div className="sub-title-tech--container">
          <h1>What kind of Tech does Bryan Teach?</h1>
        </div>
      </div>

      <div className="body-tech-container" ref={skillRefContainer}>
        <img src={python}></img>
        <img src={js}></img>
        <img src={java}></img>
        <img src={sharp}></img>
        <img src={html}></img>
        <img src={css}></img>
        <img src={react}></img>
        <img src={php}></img>
        <img src={mongo}></img>
        <img src={mysql}></img>
        <img src={node}></img>
        <img src={git}></img>
        <img src={vscode}></img>
        <img src={unity}></img>
        <img src={microsoft}></img>
        <img src={xampp}></img>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Technologies;
