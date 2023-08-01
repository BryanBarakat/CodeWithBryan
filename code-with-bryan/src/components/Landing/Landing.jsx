import React, { useState, useEffect } from "react";
import { NavBar } from "../../pieces/NavBar/NavBar";
import Arrow from "../../assets/arrow.png";
import About from "../About/About";
import pdfBryan from "../../assets/Bryan_Barakat_Resume.pdf";
import { useParams } from "../../Context/Context";
import Button from "../../assets/circle.png";
// import code from "../../assets/CodeBase.png";
// import ModelViewerComponent from "../ModelViewerComponent/ModelViewerComponent";
// import { Canvas } from "react-three-fiber";
// import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "./Landing.css";

// const Model = (props) => {
//   const { scene } = useGLTF("../../../public/need_some_space/scene.gltf");
//   return <primitive object={scene} {...props} />;
// };

export const Landing = () => {
  const { homeRef, bookingRef } = useParams();
  const [hasMounted, setHasMounted] = useState(false);

  // State to store the current viewport width
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Function to update the viewport width when the window is resized
  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  // Add event listener to update viewport width on window resize
  useEffect(() => {
    setHasMounted(true);
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollTo = (item) => {
    if (item.current) {
      item.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing">
      <NavBar></NavBar>
      <div className="landing-container" ref={homeRef}>
        <div className="landing-slogan-content">
          {viewportWidth > 1000 ? (
            <h1
              className={`landing-slogan-code ${
                hasMounted ? "fade-in-text" : ""
              }`}
            >
              Coding is the{" "}
              <span>
                new literacy, <br />
              </span>{" "}
              and you're about <span>to be fluent</span>
            </h1>
          ) : (
            <h1
              className={`new-h1-landing ${hasMounted ? "fade-in-text" : ""}`}
            >
              Coding is the <span>new literacy,</span> and you're about{" "}
              <span>to be fluent</span>
            </h1>
          )}
          <h3 className={hasMounted ? "fade-in-text" : ""}>
            All the coding knowledge you need to excel in one place.
          </h3>
          <section className="buttons-landing">
            <button
              className="button-book-now"
              onClick={() => scrollTo(bookingRef)}
            >
              Book Now
            </button>
            <a href={pdfBryan} target="_blank">
              <button className="button-benefits">
                Resume <img src={Arrow}></img>
              </button>
            </a>
          </section>
        </div>
        <div
          className={`landing-image-content ${
            hasMounted ? "rotate-fade-in-image" : ""
          }`}
        >
          {/* <img src={code}></img> */}
          <div className="buttons-code">
            <img src={Button}></img>
            <img src={Button}></img>
            <img src={Button}></img>
          </div>
          <span className="hr"></span>
          <h5>
            <span className="def">def</span>{" "}
            <span className="func">is_improving</span>
            <span className="parenthesis">(</span>
            <span className="params">person,day</span>
            <span className="parenthesis">)</span>
            <span className="colon"> :</span> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="return">return</span>{" "}
            <span className="types">True</span>
            <span className="conditions"> if </span>
            <span className="parenthesis">(</span>
            <span className="names">person.is_working_hard</span>{" "}
            <span className="fni">in</span> <span className="names">day</span>
            <span className="parenthesis">)</span>
            <span className="conditions"> else</span>{" "}
            <span className="types">False</span> <br />
            <br />
            <span className="def">def</span>{" "}
            <span className="func">is_succeeding</span>
            <span className="parenthesis">(</span>
            <span className="params">person</span>
            <span className="parenthesis">)</span>
            <span className="colon"> :</span> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="names">score</span> ={" "}
            <span className="types">0</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="names">
              lifetime
            </span> = <span className="types">28835</span> <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="fni">for</span>{" "}
            <span className="names">day</span> <span className="fni">in</span>
            <span className="range"> range</span>
            <span className="parenthesis">(</span>
            <span className="names">lifetime</span>
            <span className="parenthesis">)</span>
            <span className="colon"> :</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="conditions">if </span>
            <span className="parenthesis">(</span>
            <span className="func">is_improving</span>
            <span className="inner-parenthesis">(</span>
            <span className="params">person,day</span>
            <span className="inner-parenthesis">)</span>
            <span className="parenthesis">)</span>
            <span className="colon"> :</span> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="names">score </span>
            += <span className="types">1</span> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="conditions">else</span>: <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="names">score </span>
            -= <span className="types">1</span> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="return">return</span>{" "}
            <span className="types">True</span>
            <span className="conditions"> if</span>{" "}
            <span className="names">score</span>{" "}
            <span className="conditions">≥</span>{" "}
            <span className="types">0</span>{" "}
            <span className="conditions">else</span>{" "}
            <span className="types">False</span>{" "}
            <span className="animated-caret"></span>
          </h5>
          {/* <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
            <PresentationControls
              speed={1.5}
              global
              // zoom={.5}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage environment={null}>
                <Model scale={0.01}></Model>
              </Stage>
            </PresentationControls>
          </Canvas> */}
        </div>
      </div>
      <About />
    </div>
  );
};

export default Landing;
