import React, { useState, useRef } from "react";
import BryanLogo from "../../assets/logoBryan.png";
import emailjs from "@emailjs/browser";
import { useParams } from "../../Context/Context";
import "./NavBar.css";

export const NavBar = () => {
  const { homeRef, aboutRef, skillsRef, bookingRef } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  const row1 = document.getElementById("row1");
  const row2 = document.getElementById("row2");
  const row3 = document.getElementById("row3");
  const navbar = document.getElementById("navbar");
  const ham = document.getElementById("ham");

  const scrollTo = (item) => {
    if (item.current) {
      item.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const input = document.getElementById("fullName");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fullName)) {
      // Show an error message or handle the invalid email input as needed
      input.style.border = "3px solid red";
      return;
    }

    input.style.border = "1px solid #ccc";

    emailjs
      .sendForm(
        "service_m38dfx7",
        "template_pvshgc1",
        form.current,
        "2RF7gw2k1nDqfFWQU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFullName("");
    setSubject("");
    setMessage("");
    closeModal();
  };

  const handleClickBurger = () => {
    if (row1 && row2 && row3) {
      if (!row2.style.opacity || row2.style.opacity === "1") {
        openBurger();
      } else {
        closeBurger();
      }
    }
  };

  const closeBurger = () => {
    row2.style.opacity = "1";
    row1.style.transform = "rotate(0) translateY(0)";
    row3.style.transform = "rotate(0) translateY(0)";
    navbar.style.animation = "pop-menu-out 400ms ease-in-out forwards";
    ham.style.position = "initial";
    ham.style.right = "5%";
  };

  const openBurger = () => {
    row2.style.opacity = "0";
    row1.style.transform = "rotate(45deg) translateY(12px)";
    row3.style.transform = "rotate(-45deg) translateY(-12px)";
    navbar.style.display = "flex";
    navbar.style.animation = "pop-menu 400ms ease-in-out forwards";
    ham.style.position = "fixed";
    ham.style.right = "0%";
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX.current;

    if (diffX > 50) {
      // Swipe right (close sidebar)
      closeBurger();
    } else if (diffX < -50) {
      // Swipe left (open sidebar)
      openBurger();
    }
  };

  return (
    <div
      ref={containerRef}
      className="navbar-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="navbar-logo">
        <img src={BryanLogo} alt="Logo"></img>
        <h2>CodeWithBryan</h2>
      </div>
      <div id="navbar" className="navbar-options">
        <h3
          onClick={() => {
            closeBurger();
            scrollTo(homeRef);
          }}
        >
          Home
        </h3>
        <h3
          onClick={() => {
            closeBurger();
            scrollTo(aboutRef);
          }}
        >
          About Me
        </h3>
        <h3
          onClick={() => {
            closeBurger();
            scrollTo(skillsRef);
          }}
        >
          Skills
        </h3>
        <h3
          onClick={() => {
            closeBurger();
            scrollTo(bookingRef);
          }}
        >
          Book an Appointment
        </h3>
        <h3
          onClick={() => {
            handleClickBurger();
            openModal();
          }}
        >
          Contact Me
        </h3>
      </div>
      <div id="ham" className="hamburger" onClick={handleClickBurger}>
        <div id="row1" className="row"></div>
        <div id="row2" className="row"></div>
        <div id="row3" className="row"></div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <span
              className="close-btn"
              onClick={() => {
                setFullName("");
                setSubject("");
                setMessage("");
                closeModal();
              }}
            >
              Close
            </span>
            <h2>Contact Form</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="fullName">
                Email <span>*</span>
              </label>
              <input
                name="from_name"
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <label htmlFor="subject">
                Subject <span>*</span>
              </label>
              <select
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              >
                <option value="">Select a subject</option>
                <option value="Inquiry">Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
                {/* Add more options as needed */}
              </select>

              <label htmlFor="message">
                Message <span>*</span>
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button type="submit" value="Send">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
