import React, { useState, useEffect, useRef } from "react";
import { useParams } from "../../Context/Context";
import "./About.css";

export const About = () => {
  const { aboutRef } = useParams();
  const statsRef = useRef(null);

  // State to store the current viewport width
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Function to update the viewport width when the window is resized
  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  // Add event listener to update viewport width on window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Intersection Observer callback function
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === aboutRef.current) {
          aboutRef.current.classList.add("animate");
        }
        if (entry.target === statsRef.current) {
          statsRef.current.classList.add("animate2");
        }
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
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-container" ref={aboutRef}>
      <div className="about-hello">
        <h1>HELLO,</h1>
      </div>
      <br />
      <div className="name-about--container">
        <span>I'm Bryan Barakat.</span>
      </div>
      <br />
      <br />
      <div className="desc-about--container">
        <h2>
          Are you feeling stuck or overwhelmed in your coding journey? Don't
          worry, I've got your back! Together, we'll work to level up your
          skills, increase your earning potential, and build a brighter future.
        </h2>
      </div>
      <br />
      <br />
      <div className="iframe--container">
        <iframe
          width="560"
          height="315"
          src="https://www"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <br />
      <br />
      <br />
      {viewportWidth > 600 && (
        <>
          <br />
        </>
      )}
      <div className="stats-about-container" ref={statsRef}>
        <div className="box">
          <span>40+</span>
          <br />
          <h3>Technologies & Concepts</h3>
        </div>
        <div className="box">
          <span>15K+</span>
          <br />
          <h3>Project Impressions</h3>
        </div>
        <div className="box">
          <span>3+</span>
          <br />
          <h3>Years of experience</h3>
        </div>
        <div className="box">
          <span>3</span>
          <br />
          <h3>Teaching Languages</h3>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
