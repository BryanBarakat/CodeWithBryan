import React from "react";
import warning from "../../assets/attention.png";
import "./ErrorMessage.css";

const ErrorMessage = ({ message, onClick }) => {
  return (
    <div className="modal-backdrop">
      <div className="error-container">
        <div className="error-content">
          <div className="content-message-error">
            <img src={warning} alt="Warning"></img>
            <h3>{message}</h3>
          </div>
          <button className="close-error" onClick={onClick}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
