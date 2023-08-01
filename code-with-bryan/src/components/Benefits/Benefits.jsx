import React, { useState, useEffect, useRef } from "react";
import Laptop from "../../assets/971-removebg-preview.png";
import LogoBryan from "../../assets/logoBryan.png";
import LogoCourse from "../../assets/learning.png";
import LogoWrench from "../../assets/wrench.png";
import LogoWorld from "../../assets/world.png";
import LogoTimer from "../../assets/timer.png";
import Img1 from "../../assets/79-removebg-preview.png";
import Img2 from "../../assets/7744165-removebg-preview.png";
import Img3 from "../../assets/3539257-removebg-preview.png";
import Img4 from "../../assets/3d-rendering-people-avatars-zoom-call-removebg-preview.png";
import "./Benefits.css";

export const Benefits = () => {
  const blockRef1 = useRef(null);
  const blockRef2 = useRef(null);
  const blockRef3 = useRef(null);
  const blockRef4 = useRef(null);

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);

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
        if (entry.target === blockRef1.current) {
          blockRef1.current.classList.add("rotate-fade-in-image-right");
          textRef1.current.classList.add("animateText");
        }
        if (entry.target === blockRef2.current) {
          blockRef2.current.classList.add("rotate-fade-in-image-left");
          textRef2.current.classList.add("animateText");
        }
        if (entry.target === blockRef3.current) {
          blockRef3.current.classList.add("rotate-fade-in-image-right");
          textRef3.current.classList.add("animateText");
        }
        if (entry.target === blockRef4.current) {
          blockRef4.current.classList.add("rotate-fade-in-image-left");
          textRef4.current.classList.add("animateText");
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
    if (blockRef1.current) {
      observer.observe(blockRef1.current);
      observer.observe(textRef1.current);
    }
    if (blockRef2.current) {
      observer.observe(blockRef2.current);
      observer.observe(textRef2.current);
    }
    if (blockRef3.current) {
      observer.observe(blockRef3.current);
      observer.observe(textRef3.current);
    }
    if (blockRef4.current) {
      observer.observe(blockRef4.current);
      observer.observe(textRef4.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="benefits-container">
      <h3 className="features-benefits">FEATURES</h3>
      <br />
      <h1 className="why-bryan">Why Code with Bryan?</h1>
      <div className="benefits-items">
        <div className="item">
          <div className="subitem1--benefits move-cont1">
            <img className="item-logo--benefits timer" src={LogoTimer}></img>
            <h3>Fast-track your learning</h3>
            <h1>No fluff, just the good stuff!</h1>
            <h2 className="text1" ref={textRef1}>
              No matter your background or experience, I'm here to help you
              excel in tech. From web development to data structures and
              algorithms, I cover it all. Learn in coffee shops, universities,
              or go virtual with online sessions.
            </h2>
          </div>
          <div className="subitem2--benefits move-cont1">
            <img
              className="image-benefits-desc image1"
              src={Img1}
              ref={blockRef1}
            ></img>
          </div>
        </div>
        <div className="item">
          {viewportWidth > 600 ? (
            <>
              <div className="subitem2--benefits">
                <img
                  className="image-benefits-desc image2"
                  src={Img2}
                  ref={blockRef2}
                ></img>
              </div>
              <div className="subitem1--benefits move-cont2">
                <img
                  className="item-logo--benefits course"
                  src={LogoCourse}
                ></img>
                <h3>Easy-to-follow lessons</h3>
                <h1>Free lessons</h1>
                <h2 className="text2" ref={textRef2}>
                  Embark on a coding adventure with my free and flexible
                  lessons! Worried about busy schedules? Fear not! Fill the form
                  below and secure your spot. With me, there's no barrier to
                  learning.
                </h2>
              </div>
            </>
          ) : (
            <>
              <div className="subitem1--benefits move-cont2">
                <img
                  className="item-logo--benefits course"
                  src={LogoCourse}
                ></img>
                <h3>Step-by-step lessons</h3>
                <h1>Easy-to-follow lessons</h1>
                <h2 className="text2" ref={textRef2}>
                  Embark on a coding adventure with my free and flexible
                  lessons! Worried about busy schedules? Fear not! Fill the form
                  below and secure your spot. With me, there's no barrier to
                  learning.
                </h2>
              </div>
              <div className="subitem2--benefits">
                <img
                  className="image-benefits-desc image2"
                  src={Img2}
                  ref={blockRef2}
                ></img>
              </div>
            </>
          )}
        </div>
        <div className="item">
          <div className="subitem1--benefits">
            <img className="item-logo--benefits wrench" src={LogoWrench}></img>
            <h3>Perfect mix of theory and practice</h3>
            <h1>Hands-on learning</h1>
            <h2 className="text3" ref={textRef3}>
              I believe the best way to learn is by actually doing. That's why
              my courses teach you the essential theory and provide practical
              exercises. You'll be able to practice everything you learn and
              apply it to real-life situations.
            </h2>
          </div>
          <div className="subitem2--benefits move-cont3">
            <img
              className="image-benefits-desc image3"
              src={Img3}
              ref={blockRef3}
            ></img>
          </div>
        </div>
        <div className="item">
          {viewportWidth > 600 ? (
            <>
              <div className="subitem2--benefits">
                <img
                  className="image-benefits-desc image4"
                  src={Img4}
                  ref={blockRef4}
                ></img>
              </div>
              <div className="subitem1--benefits move-cont4">
                <img
                  className="item-logo--benefits world"
                  src={LogoWorld}
                ></img>
                <h3>Embrace the chance to grow</h3>
                <h1>Connect, grow and thrive</h1>
                <h2 className="text4" ref={textRef4}>
                  As you learn, I learn too—becoming a better teacher and
                  creating a supportive space for all learners. By offering free
                  coding lessons, I aim to make tech accessible to every
                  aspiring mind.
                </h2>
              </div>
            </>
          ) : (
            <>
              <div className="subitem1--benefits move-cont4">
                <img
                  className="item-logo--benefits world"
                  src={LogoWorld}
                ></img>
                <h3>Embrace the chance to grow</h3>
                <h1>Connect, grow and thrive</h1>
                <h2 className="text4" ref={textRef4}>
                  As you learn, I learn too—becoming a better teacher and
                  creating a supportive space for all learners. By offering free
                  coding lessons, I aim to make tech accessible to every
                  aspiring mind.
                </h2>
              </div>
              <div className="subitem2--benefits">
                <img
                  className="image-benefits-desc image4"
                  src={Img4}
                  ref={blockRef4}
                ></img>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
